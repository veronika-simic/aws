const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" });

const ec2 = new AWS.EC2();

const params = {
  InstanceIds: ["i-0a870c4ca323f9790"],
};

ec2.describeInstances(params, function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
