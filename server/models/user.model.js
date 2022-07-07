const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    user_name: String,
    email: String,
    avatar: String,
    password: String,
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("User", UserSchema);
