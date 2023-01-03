import { DynamoDBClient, UpdateTableCommand } from "@aws-sdk/client-dynamodb";

const dynamodbClient = new DynamoDBClient();

const params = {
  ProvisionedThroughput: {
    ReadCapacityUnits: 4,
    WriteCapacityUnits: 4,
  },
  TableName: "Employee",
};

const run = async () => {
  try {
    const data = await dynamodbClient.send(new UpdateTableCommand(params));
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

run();
