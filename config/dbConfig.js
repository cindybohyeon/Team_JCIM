const mysql = require("promise-mysql");

const dbConfig = {
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "1209",
  database: "first"
};

module.exports = mysql.createPool(dbConfig);