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
  client.query(
    "UPDATE Employee SET email = 'veraeamil@haha.com' WHERE email= 'eamil@haha.com'",
    (err, result) => {
      if (!err) {
        console.log(result);
      } else {
        console.log(err);
      }

      client.end();
    }
  );
};

selectData();
