import {
  DynamoDBClient,
  BatchWriteItemCommand,
} from "@aws-sdk/client-dynamodb";

const dynamodbClient = new DynamoDBClient();

const params = {
  TableName: "Employee",
  RequestItems: {
    Employee: [
        {
            PutRequest: {
                Item: {
                    id: {N: '2'},
                    employeName: {S: 'jenniffer'}
                }
            }
        },
        {
            PutRequest: {
                Item: {
                    id: {N: '3'},
                    employeName: {S: 'Jack'}
                }
            }
        }
    ]
  }
};



const run = async () => {
    try {
      const data = await dynamodbClient.send(new BatchWriteItemCommand(params));
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };
  
  run();