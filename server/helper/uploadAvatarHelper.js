const multer = require("multer");

const multerStorage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "uploads/avatars");
  },
  filename: (req, file, callback) => {
    callback(null, `avatar-${Date.now()}-` + file.originalname);
  },
});

const multerFilter = (req, file, callback) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    callback(null, true);
  } else {
    callback(null, false);
    return callback(new Error("Only .png, .jpg and .jpeg format allowed!"));
  }
};

exports.upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});
