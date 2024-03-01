const mysql = require("mysql2");

const pool = mysql
  .createPool({
    host: process.env.DB_MYSQL_HOST,
    user: process.env.DB_MYSQL_USER,
    password: process.env.DB_MYSQL_PASSWORD,
    database: process.env.DB_MYSQL_DATABASE,
  })
  .promise();

module.exports = pool;

// const mysql = require("mysql");
// const connection = mysql.createConnection({
  
//   host: process.env.DB_MYSQL_HOST,
//   user: process.env.DB_MYSQL_USER,
//   password: process.env.DB_MYSQL_PASSWORD,
//   database: process.env.DB_MYSQL_DATABASE,
//   });

//   connection.connect((err) => {
//     if (err) {
//     console.error("Error connecting to MySQL database: " + err.stack);
//     return;
//     }
//     console.log("Connected to MySQL database.");
//     });