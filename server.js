const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const mongoose = require("mongoose");
const list = require("./data.js");

const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.get("/users", function (req, res) {
  return res.status(200).send({
    lists: {
      users: list,
    },
  });
});

//  const DATABASE="mongodb+srv://nityam:<PASSWORD>@cluster0-mgvuy.mongodb.net/sample?retryWrites=true&w=majority"

// const DB = DATABASE.replace(
//   "<PASSWORD>",
//   process.env.DATABASE_PASSWORD
// );

// mongoose
//   .connect(DB, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("DB connection successful!"));

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "Error connecting to MOngOB"));

// db.once("open", function () {
//   console.log("connected to Database::MongoDB");
// });

app.listen(port, (error) => {
  if (error) {
    throw error;
  }
  console.log("Server running on port" + port);
});
