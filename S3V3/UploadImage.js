import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

import { readFileSync } from "fs";

const s3Client = new S3Client();

const run = async (filename) => {
  try {
    const fileContent = readFileSync(filename);
    const bucketParams = {
      Bucket: "verapera24",
      ACL: "public-read",
      Key: "pyramid-Mayan-Chichen-Itza-Mex.webp",
      Body: fileContent,
    };
    const data = await s3Client.send(new PutObjectCommand(bucketParams));
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

run("pyramid-Mayan-Chichen-Itza-Mex.webp");
