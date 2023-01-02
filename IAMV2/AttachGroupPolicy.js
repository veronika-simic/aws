import { IAM } from 'aws-sdk';
const iam = new IAM();
const params = {
    GroupName: "S3Admins",
    PolicyArn: "arn:aws:iam::aws:policy/AmazonS3FullAccess"
}

iam.attachGroupPolicy(params, (err,data) => {
    if(err) {
        console.log(err)
    } else {
        console.log(data)
    }
})