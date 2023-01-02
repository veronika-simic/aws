const AWS = require("aws-sdk");
const iam = new AWS.IAM();
const params = {
  /* can be found by clicking on the policy amazon resource name */
  PolicyArn: "arn:aws:iam::222621649155:policy/newuserfullpolicy",
  UserName: "updated",
};

iam.attachUserPolicy(params, function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
