import { IAMClient, AddUserToGroupCommand } from "@aws-sdk/client-iam";

const iamClient = new IAMClient();

const params = {
  GroupName: "S3dmins",
  UserName: "test3",
};

const run = async () => {
  try {
    const result = await iamClient.send(new AddUserToGroupCommand(params));
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
};

run();
