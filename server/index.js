const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({
  path: __dirname + "/.env",
});

//cors option
let corsOptions = {
  origin: "http://localhost:3000",
};

//set CORS (Cross-origin resource sharing) options
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connect to MongoDB"))
  .catch((error) => console.log(error));

//simple route
app.get("/", (req, res) => {
  res.send({
    message: "Headway blog REST API",
  });
});

//set port & listen to requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
