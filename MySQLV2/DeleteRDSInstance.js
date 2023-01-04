const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" });
const rds = new AWS.RDS();

const params = {
  DBInstanceIdentifier: "verapera",
  DeleteAutomatedBackups: true,
  FinalDBSnapshotIdentifier: "verapera-snapshot",
  SkipFinalSnapshot: false /* after I delete DB instance I want a snapshot */,
};

rds.deleteDBInstance(params, function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
