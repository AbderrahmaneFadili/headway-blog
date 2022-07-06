const express = require("express");
const cors = require("cors");
const app = express();

//cors option
let corsOptions = {
  origin: "http://localhost:3000",
};

//set CORS (Cross-origin resource sharing) options
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded());

//simple route
app.get("/", (req, res) => console.log("Headway blog REST API"));

//set port & listen to requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
