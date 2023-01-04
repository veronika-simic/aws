const { Client } = require("pg");

const client = new Client({
  host: "postgres.cpuwo9cmnsc2.us-east-1.rds.amazonaws.com",
  user: "postgres",
  password: "password",
  database: "pgdatabase",
  port: 5432,
});

const selectData = () => {
  client.connect();
  client.query("SELECT * FROM Employee", (err, result) => {
    if (!err) {
      console.log(result.rows);
    } else {
      console.log(err);
    }

    client.end();
  });
};

selectData();
