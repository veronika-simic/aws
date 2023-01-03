const AWS = require("aws-sdk");

const s3 = new AWS.S3();
s3.listObjects({Bucket: 'verapera24'},(err, data) => {
  if (err) {
    console.log(err);
  } else {
    data.Contents.forEach((element,index) => {
        console.log(element.Key)
    } )
  }
});