//verify token
const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");

//verify token
const verifyToken = (request, response, next) => {
  let token = request.headers["x-access-token"];

  if (!token) {
    return response.status(403).send({
      message: "No token provided!",
    });
  }

  jwt.token(token, config.secret, (error, decoded) => {
    if (error) {
      return response.status(401).send({
        message: "Unauthorized",
      });
    }
    request.userId = decoded.id;
    next();
  });
};

const authJwt = {
  verifyToken,
};

module.exports = authJwt;
