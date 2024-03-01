const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;
const mongoRoute = require("./routes/mongo");
const mysqlRoute = require("./routes/mysql");
require("./databases/mongodb"); // eta connect kore dibe.
require("./databases/mysql");

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/mongo", mongoRoute);
app.use("/mysql", mysqlRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
