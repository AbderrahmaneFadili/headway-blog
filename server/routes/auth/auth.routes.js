const { authJwt, verifySignup } = require("../../middlewares");
const AuthController = require("../../controllers/auth.controller");
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
  router.post(
    "/register",
    [verifySignup.checkDuplicateEmail],
    AuthController.register,
  );
  //POST : login
  router.post("/login", AuthController.login);

  app.use("/api/auth", router);
};
