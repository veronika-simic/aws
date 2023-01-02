const AWS = require("aws-sdk");

const iam = new AWS.IAM();

const params = {
  PolicyArn: "arn:aws:iam::222621649155:policy/newuserfullpolicy",
  UserName: "updated",
};

iam.detachUserPolicy(params, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
