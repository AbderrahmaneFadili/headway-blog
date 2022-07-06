const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");
const bcrypt = require("bcryptjs");
const User = require("../models/user.model");
/**
 * Auth Controller
 * Add - Edit - Delete - Get => User data
 */

class AuthController {
  /**
   * Register
   */
  register = (request, response) => {};

  /**
   * Login
   */
  login = (request, response) => {};
}

module.exports = new AuthController();
