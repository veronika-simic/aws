import { IAMClient, CreateUserCommand, GetUserCommand } from "@aws-sdk/client-iam";
const iamClient = new IAMClient();
const params = {
  UserName: "test2",
};

const run = async () => {
  try {
    const data = await iamClient.send(new GetUserCommand(params));
    console.log("User exists");
    return data;
  } catch (err) {
    try {
      const result = await iamClient.send(new CreateUserCommand(params));
      console.log(result);
      return result;
    } catch (err) {
      console.log(err);
    }
  }
};

run();
