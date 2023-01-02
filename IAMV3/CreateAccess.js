import { IAMClient, CreateAccessKeyCommand } from "@aws-sdk/client-iam";

const iamClient = new IAMClient();

const params = {
  UserName: "test3",
};

const run = async () => {
  try {
    const data = await iamClient.send(new CreateAccessKeyCommand(params));
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
run();
