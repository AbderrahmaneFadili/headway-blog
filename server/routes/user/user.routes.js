const { authJwt, verifySignup } = require("../../middlewares");
const UserController = require("../../controllers/user.controller");
const router = require("express").Router();
const uploadAvatarHelper = require("../../helper/uploadAvatarHelper");

module.exports = (app) => {
  //use header middleware
  app.use((request, response, next) => {
    response.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept",
    );
    next();
  });

  //GET : get current
  router.get("/current/:id", [authJwt.verifyToken], UserController.currentUser);

  //GET :
  router.put(
    "/upload/avatar/:id",
    [authJwt.verifyToken],
    uploadAvatarHelper.upload.single("avatar"),
    UserController.uploadAvatar,
  );
  app.use("/user", router);
};
