import { IAMClient, DetachUserPolicyCommand } from "@aws-sdk/client-iam";
const iamClient = new IAMClient();

const params = {
  PolicyArn: "arn:aws:iam::222621649155:policy/newuserfullpolicy",
  UserName: "test3",
};

const run = async () => {
  try {
    const data = await iamClient.send(new DetachUserPolicyCommand(params));
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

run();