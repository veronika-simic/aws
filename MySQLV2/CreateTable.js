const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "verapera.cpuwo9cmnsc2.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "password",
  database: "testdb",
  port: 3306,
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected");
  const sql = "CREATE TABLE customer (name VARCHAR(255), email VARCHAR(255))";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});
