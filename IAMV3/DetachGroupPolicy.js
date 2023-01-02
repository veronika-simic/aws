import { IAMClient, DetachGroupPolicyCommand } from "@aws-sdk/client-iam";

const iamClient = new IAMClient();

const params = {
  GroupName: "S3dmins",
  PolicyArn: "arn:aws:iam::aws:policy/AmazonS3FullAccess",
};

const run = async () => {
  try {
    const data = iamClient.send(new DetachGroupPolicyCommand(params));
    console.log("Policy detached");
    return data;
  } catch (err) {
    console.log(err);
  }
};

run();