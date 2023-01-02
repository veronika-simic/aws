/* Add user to group */
const AWS = require("aws-sdk");
const iam = new AWS.IAM();

const params = {
  GroupName: "S3Admins",
  UserName: "updated",
};

iam.addUserToGroup(params, function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
