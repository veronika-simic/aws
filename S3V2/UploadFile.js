const AWS = require("aws-sdk");
const fs = require("fs");

const s3 = new AWS.S3();

const uploadFile = (fileName, bucketName) => {
  const fileContent = fs.readFileSync(fileName);
  const params = {
    Bucket: bucketName,
    Key: "newfile.txt",
    Body: fileContent,
  };

  s3.upload(params, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
};

uploadFile('file.txt', 'verapera24')
