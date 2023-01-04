const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" });
const fs = require("fs");

const ec2 = new AWS.EC2();

const params = {
  KeyName: "mykey",
  KeyType: "rsa",
};

ec2.createKeyPair(params, function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
    fs.writeFile("mykey.pem", data.KeyMaterial, (er) => {
      if (err) {
        console.log("Failed to save");
      } else {
        console.log("Saved");
      }
    });
  }
});
