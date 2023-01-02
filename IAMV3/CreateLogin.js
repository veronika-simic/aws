import { IAMClient, CreateLoginProfileCommand } from "@aws-sdk/client-iam";
const iamClient = new IAMClient();

const params = {
  Password: "NewPassword1",
  PasswordResetRequired: false,
  UserName: "test3",
};

const run = async () => {
  try {
    const data = await iamClient.send(new CreateLoginProfileCommand(params));
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

run();
