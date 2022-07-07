const { authJwt, verifySignup } = require("../../middlewares");
const UserController = require("../../controllers/user.controller");
const router = require("express").Router();

module.exports = (app) => {
  //use header middleware
  app.use((request, response, next) => {
    response.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept",
    );
    next();
  });

  //POST : register
  router.get("/current/:id", [authJwt.verifyToken], UserController.currentUser);

  app.use("/user", router);
};
