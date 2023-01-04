const { Client } = require("pg");

const client = new Client({
  host: "postgres.cpuwo9cmnsc2.us-east-1.rds.amazonaws.com",
  user: "postgres",
  password: "password",
  database: "pgdatabase",
  port: 5432,
});

const insertData = () => {
  client.connect();
  client.query(
    "INSERT INTO Employee (id, name,email) VALUES ('1', 'vera', 'eamil@haha.com')",
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

insertData();
