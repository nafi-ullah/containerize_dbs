//var mongoURL = "mongodb://localhost:27017/info";

 const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;

var mongoURL = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/`;

// connect to the database
const mongoose = require("mongoose");
mongoose
  .connect(mongoURL)
  .then(() => {
    console.log("Connected to Mongo DB!");
  })
  .catch((error) => {
    console.log("Connection failed!", error);
    process.exit();
  });


