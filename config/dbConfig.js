const mysql = require("promise-mysql");

const dbConfig = {
  host: "please.czhsfrl41har.ap-northeast-2.rds.amazonaws.com",
  port: 3306,
  user: "admin",
  password: "admin54321",
  database: "team_JCIM"
};

module.exports = mysql.createPool(dbConfig);