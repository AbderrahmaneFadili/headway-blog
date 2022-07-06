const User = require("../models/user.model");

const checkDuplicateEmail = (request, response, next) => {
  User.findOne({
    email: request.body.email,
  }).then((user) => {
    if (user) {
      return response.status(200).send({
        message: "Failed! Email is already in use!",
      });
    }
    next();
  });
};

const verifySignup = {
  checkDuplicateEmail,
};

module.exports = verifySignup;
