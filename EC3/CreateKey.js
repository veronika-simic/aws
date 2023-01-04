import { KeyType } from "@aws-sdk/client-dynamodb";
import { EC2Client, CreateKeyPairCommand } from "@aws-sdk/client-ec2";
import { writeFile } from "fs";
const client = new EC2Client({
  region: "us-east-1",
});

const params = {
  KeyName: "v3333333key",
  KeyType: "rsa",
};

const run = async () => {
  try {
    const data = await client.send(new CreateKeyPairCommand(params));
    writeFile("v3key.pem", data.KeyMaterial, (err) => {
      if (err) {
        console.log("Failed to save");
      } else {
        console.log("Saved");
      }
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

run();
