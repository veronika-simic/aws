const AWS = require("aws-sdk");

const iam = new AWS.IAM();

const params = {
  NewUserName: "updated",
  UserName: "john",
};

iam.updateUser(params, function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
