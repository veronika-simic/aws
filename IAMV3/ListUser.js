import { IAMClient, ListUsersCommand } from "@aws-sdk/client-iam";

const iamClient = new IAMClient();

const params = { MaxItems: 5 };

const run = async () => {
  const data = await iamClient.send(new ListUsersCommand(params));
  const users = data.Users
  users.forEach(user => {
    console.log(user.UserName, user.Arn);
  })
};

run()