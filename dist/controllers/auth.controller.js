import { userAuthKey } from "../config/auth.config.js";
import { dbHelper } from "../models/index.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
//const User = dbHelper.user;
const User = dbHelper.user;
const Role = dbHelper.role;
export const signup = (req, res) => {
  const user = new User({
    userUserName: req.body.username,
    userEmail: req.body.email,
    userPassword: bcrypt.hashSync(req.body.password, 8)
  });
  user.save((err, user) => {
    if (err) {
      res.status(500).send({
        message: err
      });
      return;
    }
    if (req.body.roles) {
      Role.find({
        name: {
          $in: req.body.roles
        }
      }, (err, roles) => {
        if (err) {
          res.status(500).send({
            message: err
          });
          return;
        }
        user.userRole = roles.map(role => role._id);
        user.save(err => {
          if (err) {
            res.status(500).send({
              message: err
            });
            return;
          }
          res.send({
            message: 'User was registered successfully!'
          });
        });
      });
    } else {
      Role.findOne({
        name: 'user'
      }, (err, role) => {
        if (err) {
          res.status(500).send({
            message: err
          });
          return;
        }
        user.roles = [role._id];
        user.save(err => {
          if (err) {
            res.status(500).send({
              message: err
            });
            return;
          }
          res.send({
            message: 'User was registered successfully!'
          });
        });
      });
    }
  });
};
export const signin = (req, res) => {
  User.findOne({
    userUsername: req.body.username
  }).populate('roles', '-__v').exec((err, user) => {
    if (err) {
      res.status(500).send({
        message: err
      });
      return;
    }
    if (!user) {
      return res.status(404).send({
        message: 'User not found!'
      });
    }
    let passwordIsValid = bcrypt.compareSync(req.body.password, user.userPassword);
    let token = jwt.sign({
      id: user.userId
    }, userAuthKey.secret, {
      expiresIn: 86400
    });

    // Should have a type !!??
    let authorities = [];
    for (let i = 0; i < user.roles.length; i++) {
      authorities.push('Role_' + user.roles[i].name.toUpperCase());
    }

    // Might be a little.....
    req.session.token = token;
    res.status(200).send({
      id: user.userId,
      username: user.userUserName,
      email: user.userEmail,
      roles: authorities
    });
  });
};
export const signout = async (req, res) => {
  try {
    req.session = null;
    return res.status(200).send({
      message: 'You\'ve been signed out!'
    });
  } catch (err) {
    // TS issue
    //this.next(err);
  }
};
export const controller = {
  signin,
  signout,
  signup
};