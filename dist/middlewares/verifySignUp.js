import { dbHelper } from "../models/index.js";
const ROLES = dbHelper.ROLES;
const User = dbHelper.user;
//const User = USER_MODEL;

const checkDuplicateUsernameOrEmail = async (req, res, next) => {
  // Check username
  // First Find all users with username OR email - if any, send status 500 with message - then next()

  try {
    const duplicate = await User.findOne({
      $or: [{
        userUserName: req.body.username
      }, {
        userEmail: req.body.email
      }]
    });
    if (duplicate) {
      res.status(400).send({
        message: 'Duplicate username og email!'
      });
    }
    next();
  } catch (err) {
    res.status(500).send({
      message: err
    });
  }
};

// Check roles of user
// If user has role that doesn't exist - send status 400 - then next()
const checkRolesExist = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: `Failed! Role ${req.body.roles[i]} does not exist!`
        });
        return;
      }
    }
  }
  next();
};
const verifySignup = {
  checkDuplicateUsernameOrEmail,
  checkRolesExist
};
export default verifySignup;