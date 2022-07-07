const User = require("../models/user.model");

class UserController {
  /**
   * upload avatar action
   * HTTP : POST
   */
  uploadAvatar = (request, response) => {};

  /**
   * current user
   * HTTP GET
   */
  currentUser = (request, response) => {
    //Get current user
    User.findById(request.params.id)
      .then((user) => response.status(200).send(user))
      .catch((error) =>
        response.status(500).send({
          message: error.message,
        }),
      );
  };
}

module.exports = new UserController();
