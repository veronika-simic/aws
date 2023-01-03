const AWS = require("aws-sdk");
/* AWS.config.update({ region: "us-east-1" });  this is by default*/
const s3 = new AWS.S3();
const params = {
  Bucket: "verapera24",
  ACL: "private" /* defines who has access to bucket, if not specified by default is private, it can also be public-read-write */,
};

s3.createBucket(params, function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
