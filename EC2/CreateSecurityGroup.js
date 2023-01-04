const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" });
const fs = require("fs");

const ec2 = new AWS.EC2();

const params = {
  Description: "security group ",
  GroupName: "sdksecurity",
};

ec2.createSecurityGroup(params, function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
