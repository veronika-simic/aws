const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const app = express();

app.use(bodyParser.json());
const connect = mysql.createConnection({
  host: "database-1.cpuwo9cmnsc2.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "password",
  database: "database-1",
});

connect.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log("Database is connected");
  }
});

app.get("/api/items", (req, res) => {
  let sql = "SELECT * FROM * database-1";
  let query = connect.query(sql, (err, result) => {
    if (err) throw err;
    res.send(apiResponse(result));
  });
});

function apiResponse(result) {
  return JSON.stringify({ status: 200, error: null, response: result });
}

app.listen(3000, () => {
  console.log("Started");
});
