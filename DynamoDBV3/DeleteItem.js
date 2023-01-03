import { DynamoDBClient, DeleteItemCommand } from "@aws-sdk/client-dynamodb";

const dynamodbClient = new DynamoDBClient();

const params = {
  TableName: "Employee",
  Key: {
    id: { N: "1" },
  },
};

const run = async () => {
  try {
    const data = await dynamodbClient.send(new DeleteItemCommand(params));
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

run();
