const AWS = require("aws-sdk");
const s3 = new AWS.S3();

const params = {
  Bucket: "verapera24",
  Key: "newfile.txt",
  ObjectAttributes: ["StorageClass"] /* about which attribute we want info */,
};

s3.getObjectAttributes(params, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
