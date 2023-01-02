const AWS = require("aws-sdk");

const iam = new AWS.IAM();

const params = {
    /* if the scope is local it will give us the policies we created from terminal */
    /* if its AWS than it gives us all aws policies we have */
  Scope: "AWS", 
};

iam.listPolicies(params, function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
