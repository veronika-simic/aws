const { Client } = require("pg");

const client = new Client({
  host: "postgres.cpuwo9cmnsc2.us-east-1.rds.amazonaws.com",
  user: "postgres",
  password: "password",
  port: 5432,
});

const createData = () => {
  client.connect();
  client.query("CREATE DATABASE pgdatabase", (err, result) => {
    if (!err) {
      console.log(err);
    } else {
      console.log(result);
    }

    client.end();
  });
};

createData();
