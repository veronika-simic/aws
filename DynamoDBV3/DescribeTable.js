import { DynamoDBClient, DescribeTableCommand } from "@aws-sdk/client-dynamodb";

const dynamodbClient = new DynamoDBClient();

const params = {
  TableName: "Employee",
};

const run = async () => {
  try {
    const data = await dynamodbClient.send(new DescribeTableCommand(params));
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

run();
