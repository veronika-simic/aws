const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" });
const fs = require("fs");

const ec2 = new AWS.EC2();

const params = {
  ImageId: "ami-0be29bafdaad782db",
  MinCount: 1,
  MaxCount: 1,
  InstanceType: "t2.micro",
  KeyName: "mykey",
  SecurityGroups: ["sdksecurity"],
};

ec2.runInstances(params, function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
