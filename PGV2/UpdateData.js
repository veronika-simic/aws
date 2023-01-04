const { Client } = require("pg");

const client = new Client({
  host: "postgres.cpuwo9cmnsc2.us-east-1.rds.amazonaws.com",
  user: "postgres",
  password: "password",
  database: "pgdatabase",
  port: 5432,
});

const deleteData = () => {
  client.connect();
  client.query("DELETE FROM Employee WHERE id=1", (err, result) => {
    if (!err) {
      console.log(result);
    } else {
      console.log(err);
    }

    client.end();
  });
};

deleteData();
