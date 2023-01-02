const AWS = require("aws-sdk");
AWS.config.update({'region': 'us-east-1'})
const dynamodb = new AWS.DynamoDB();

const params = {
  RequestItems: {
    employee: [
      {
        PutRequest: {
          Item: {
            id: {
              S: "3",
            },
            name: {
              S: "jane",
            },
            age: {
              S: "40",
            },
          },
        },
        PutRequest: {
          Item: {
            id: {
              S: "2",
            },
            name: {
              S: "lucy",
            },
            age: {
              S: "21",
            },
          },
        },
      },
    ],
  },
};

dynamodb.batchWriteItem(params, function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
