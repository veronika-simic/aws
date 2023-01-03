const AWS = require("aws-sdk");

const fs = require("fs");

const s3 = new AWS.S3();

const uploadImage = (fileName) => {
  const fileContent = fs.readFileSync(fileName);
  const params = {
    Bucket: "verapera24",
    ACL: "public-read" /* acl for object */,
    Key: "pyramid-Mayan-Chichen-Itza-Mex.webp",
    Body: fileContent,
  };
  s3.putObject(params, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
};

uploadImage('pyramid-Mayan-Chichen-Itza-Mex.webp')
