import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";

const dynamodbClient = new DynamoDBClient();

const params = {
  TableName: "Employee",
  Item: {
    id: {
      N: "1",
    },
    employeName: { S: "Jane" },
    salary: { N: "100" },
  },
};

const run = async () => {
  try {
    const data = await dynamodbClient.send(new PutItemCommand(params));
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

run();
