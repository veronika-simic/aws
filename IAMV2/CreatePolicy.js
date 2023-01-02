/* creates new policy that can be seen in IAM policies */
import { IAM } from "aws-sdk";

const iam = new IAM();

const policy_document = {
  Version: "2012-10-17",
  Statement: [{ Effect: "Allow", Action: "*", Resource: "*" }],
};

const params = {
  PolicyDocument: JSON.stringify(policy_document),
  PolicyName: "newuserfullpolicy",
  Description: "This is my new policy",
};

iam.createPolicy(params, function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
