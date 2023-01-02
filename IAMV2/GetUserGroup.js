// this script creates user from out terminal by runing node CreateUser.js
const AWS = require("aws-sdk");
const iam = new AWS.IAM();

const params = {
    GroupName: 'RDSAdmins'
}

iam.getGroup(params, function(err, data) {
    if (err){
        console.log(err)
    } else {
        console.log(data)
    }
})
