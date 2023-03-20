import jwt from 'jsonwebtoken';
import { userAuthKey } from "../config/auth.config.js";
import { dbHelper } from "../models/index.js";
const User = dbHelper.User;
const Role = dbHelper.role;
const secret = userAuthKey.secret;
const verifyToken = (req, res, next) => {
  let token = req.session?.token;

  // console.log('This is the token from verifyToken: ')
  // console.log(token)

  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }

  // Not the best solution - fix any

  console.log(secret);
  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!"
      });
    }

    // Using body instead of setting it directly on the req obj - typescript doesn't like

    console.log('This should be the decoded id: ');
    console.log(decoded.id);
    console.log(decoded);
    req.body.userId = decoded.id;
    next();
  });
};
const isAdmin = (req, res, next) => {
  User.findById(req.body.userId).exec((err, user) => {
    if (err) {
      res.status(500).send({
        message: err
      });
    }
    Role.find({
      _id: {
        $in: user.userRole
      }
    }, (err, roles) => {
      if (err) {
        res.status(500).send({
          message: err
        });
      }
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === 'admin') {
          next();
          return;
        }
      }
      res.status(403).send({
        message: 'Require Admin Role!'
      });
    });
  });
};
const isModerator = (req, res, next) => {
  //console.log(req.body.userId);

  User.findById(req.body.userId).exec((err, user) => {
    if (err) {
      res.status(500).send({
        message: err
      });
      return;
    }
    Role.find({
      _id: {
        $in: user.userRole
      }
    }, (err, roles) => {
      if (err) {
        res.status(500).send({
          message: err
        });
        return;
      }
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === 'moderator') {
          next();
          return;
        }
      }
      res.status(403).send({
        message: 'Require moderator Role!'
      });
      return;
    });
  });
};
const authJwt = {
  verifyToken,
  isAdmin,
  isModerator
};
export default authJwt;