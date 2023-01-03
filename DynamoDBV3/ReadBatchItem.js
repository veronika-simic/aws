import { DynamoDBClient, BatchGetItemCommand } from "@aws-sdk/client-dynamodb";

const dynamodbClient = new DynamoDBClient();

const params = {
  RequestItems: {
    Employee: {
      Keys: [
        {
          id: {
            N: "2",
          },
        },
      ],
    },
  },
};

const run = async () => {
  try {
    const data = await dynamodbClient.send(new BatchGetItemCommand(params));
    console.log(data.Responses["Employee"]);
    return data;
  } catch (err) {
    console.log(err);
  }
};

run();
