const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "verapera.cpuwo9cmnsc2.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "password",
  port: 3306,
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected");
});
