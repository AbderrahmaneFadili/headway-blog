const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");
const bcrypt = require("bcryptjs");
const User = require("../models/user.model");
/**
 * Auth Controller
 * Add - Edit => User data
 */

class AuthController {
  /**
   * Register
   */
  register = (request, response) => {
    //Save user in database
    User.create({
      firstName: request.body.firstName,
      lastName: request.body.lastName,
      user_name: request.body.user_name,
      email: request.body.email,
      password: bcrypt.hashSync(request.body.password, 8),
    })
      .then((user) => {
        return response.status(200).send(user);
      })
      .catch((error) => {
        return response.status(500).send({
          message: error.message,
        });
      });
  };

  /**
   * Login Action
   * Post
   */
  login = (request, response) => {
    //Find user by email
    User.findOne({
      email: request.body.email,
    })
      .then((user) => {
        if (!user) {
          return response.status(404).send({
            message: "User not found !",
          });
        }

        let passwordIsValid = bcrypt.compareSync(
          request.body.password,
          user.password,
        );

        if (!passwordIsValid) {
          return response.status(404).send({
            accessToken: null,
            message: "Password is incorrect !",
          });
        } else {
          let token = jwt.sign({ id: user.id }, config.secret, {
            expiresIn: 86400, // 24 hours,
          });

          return response.status(200).send({
            userId: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            user_name: user.user_name,
            email: user.email,
            accessToken: token,
          });
        }
      })
      .catch((error) => {
        return response.status(500).send({
          message: error.message,
        });
      });
  };
}

module.exports = new AuthController();
