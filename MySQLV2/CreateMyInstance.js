const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" });
const rds = new AWS.RDS();

const params = {
  DBName: "verapera",
  DBInstanceIdentifier: "verapera",
  AllocatedStorage: 5,
  DBInstanceClass: "db.t2.micro",
  Engine: "MySQL",
  MasterUsername: "admin",
  MasterUserPassword: "password",
  Port: 3306,
  EngineVersion: "8.0.27",
  PubliclyAccessible: true,
  StorageType: "gp2",
};

rds.createDBInstance(params, function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
