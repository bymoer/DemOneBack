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

  // Check for user roles supplied
  if (req.body.roles.length == 0 || req.body.roles == undefined) {
    res.status(400).send({
      message: 'No User Roles supplied! Please supply User Roles!'
    });
    return;
  }

  // Save user
  user.save(user).then(user => {
    if (req.body.roles) {
      Role.find({
        name: {
          $in: req.body.roles
        }
      }).then(roles => {
        user.userRole = roles.map(role => role._id);
        user.save().then(() => {
          res.send({
            message: 'User was registered successfully!'
          });
        }).catch(err => {
          res.status(400).send({
            message: err
          });
          return;
        });
      }).catch(err => {
        res.status(400).send({
          message: err
        });
        return;
      });
    } else {
      res.status(400).send({
        message: 'No user roles supplied!'
      });
      return;
    }
  }).catch(err => {
    res.status(400).send({
      message: err
    });
    return;
  });
};
export const signin = (req, res) => {
  User.findOne({
    userUserName: req.body.username
  }).populate('userRole', '-__v').then(user => {
    if (!user) {
      return res.status(404).send({
        message: 'User not found!'
      });
    }
    let passwordIsValid = bcrypt.compareSync(req.body.password, user.userPassword);
    let token = jwt.sign({
      id: user.id
    }, userAuthKey.secret, {
      expiresIn: 86400
    });

    // Should have a type !!??
    let authorities = [];
    for (let i = 0; i < user.userRole.length; i++) {
      authorities.push('Role_' + user.userRole[i].name.toUpperCase());
    }

    // Might be a little.....
    req.session.token = token;

    // Simply testing something out
    req.session.roles = user.userRole;
    res.status(200).send({
      id: user._id,
      username: user.userUserName,
      email: user.userEmail,
      roles: authorities
    });
  }).catch(err => {
    res.status(500).send({
      message: err
    });
  });
};
export const signout = async (req, res, next) => {
  try {
    req.session = null;
    return res.status(200).send({
      message: 'You\'ve been signed out!'
    });
  } catch (err) {
    // TS issue
    next(err);
  }
};
export const controller = {
  signin,
  signout,
  signup
};