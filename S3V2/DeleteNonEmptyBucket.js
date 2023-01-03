const AWS = require("aws-sdk");
const s3 = new AWS.S3();

/* const params = {
  Bucket: "verapera25",
};

s3.createBucket(params, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

const fs = require('fs');

const uploadImage = (fileName) => {
    const fileContent = fs.readFileSync(fileName);
    const params = {
      Bucket: "verapera25",
      ACL: "public-read"  acl for object ,
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

  uploadImage('pyramid-Mayan-Chichen-Itza-Mex.webp'); */

const deleteBucket = async (Bucket) => {
  try {
    console.log("Deleting" + Bucket);
    const { Contents } = await s3.listObjects({ Bucket }).promise();
    if (Contents.length > 0) {
      await s3
        .deleteObjects({
          Bucket,
          Delete: {
            Objects: Contents.map(({ Key }) => ({ Key })),
          },
        })
        .promise();
    }
    await s3.deleteBucket({Bucket}).promise();
    return true;
  } catch (err) {
    console.log(err);
  }
};

deleteBucket('verapera25');
