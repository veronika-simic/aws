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
  const sql = "DELETE FROM customer WHERE email='veraeamil@haha.com'";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
