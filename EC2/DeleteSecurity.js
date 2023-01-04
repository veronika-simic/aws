const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" });

const ec2 = new AWS.EC2();

const params = {
  GroupId: "sg-0c5b16c0c924a848e",
};

ec2.deleteSecurityGroup(params, function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
