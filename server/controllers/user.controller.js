const User = require("../models/user.model");
const fs = require("fs");

class UserController {
  /**
   * upload avatar action
   * HTTP : PUT
   */
  uploadAvatar = async (request, response) => {
    let userId = request.params.id;
    let avatar = request.file;
    try {
      let user = await User.findById(userId);
      if (fs.existsSync(`./${user.avatar}`)) {
        fs.unlinkSync(`./${user.avatar}`);
      }

      await User.updateOne({ _id: user._id }, { avatar: avatar.path });

      return response.status(200).send({
        message: "Avatar is saved !",
      });
    } catch (error) {
      return response.status(500).send({
        message: error.message,
      });
    }
  };

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
