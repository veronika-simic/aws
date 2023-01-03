import { DynamoDBClient, DeleteTableCommand } from "@aws-sdk/client-dynamodb";

const dynamodbClient = new DynamoDBClient();

const params = {
  TableName: "Employee",
};

const run = async () => {
  try {
    const data = await dynamodbClient.send(new DeleteTableCommand(params));
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

run();
