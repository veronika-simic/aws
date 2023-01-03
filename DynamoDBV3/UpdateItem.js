import { DynamoDBClient, UpdateItemCommand } from "@aws-sdk/client-dynamodb";

const dynamodbClient = new DynamoDBClient();

const params = {
  TableName: "Employee",
  Key: {
    id: { N: "1" },
  },
  UpdateExpression: "set employeName = :n",
  ExpressionAttributeValues: {
    ":n": { S: "updated" },
  },
  ReturnValues: "UPDATED_NEW",
};

const run = async () => {
  try {
    const data = await dynamodbClient.send(new UpdateItemCommand(params));
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

run();
