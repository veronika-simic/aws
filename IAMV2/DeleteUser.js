const AWS = require("aws-sdk");
const iam = new AWS.IAM();
const params = {
  UserName: "newuser",
};
/* when deleting a user make sure there are no policies attached to it or access keys */
iam.deleteUser(params, function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
