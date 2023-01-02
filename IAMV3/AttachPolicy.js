import { IAMClient, AttachUserPolicyCommand } from "@aws-sdk/client-iam";
const iamClient = new IAMClient();

const params = {
  PolicyArn: "arn:aws:iam::222621649155:policy/newuserfullpolicy",
  UserName: "test3",
};

const run = async () => {
  try {
    const result = await iamClient.send(new AttachUserPolicyCommand(params));
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
};

run();
