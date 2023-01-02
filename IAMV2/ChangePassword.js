const AWS = require("aws-sdk");
const iam = new AWS.IAM();

const params = {
  NewPassword: "GRJXPoT)VuYs8=v3",
  OldPassword: "GRJXPoT)VuYs8=v",
};

iam.changePassword(params, function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
