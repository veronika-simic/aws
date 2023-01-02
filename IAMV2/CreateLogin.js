const AWS = require("aws-sdk");
const iam = new AWS.IAM()
const params = {
  Password: "MyPasword1",
  PasswordResetRequired: false,
  UserName: "newuser",
};

iam.createLoginProfile(params, function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
