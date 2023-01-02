const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" });
const dynamodb = new AWS.DynamoDB();

const params = {
  ProvisionedThroughput: {
    ReadCapacityUnits: 3,
    WriteCapacityUnits: 3,
  },
  TableName: "employee",
};

dynamodb.updateTable(params, function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
