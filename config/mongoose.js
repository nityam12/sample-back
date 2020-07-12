const mongoose = require("mongoose");

const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
  );

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connection successful!"));

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Error connecting to MOngOB"));

db.once("open", function () {
  console.log("connected to Database::MongoDB");
});

module.exports = db;
