import { CreateBucketCommand, S3Client } from "@aws-sdk/client-s3";

const s3Client = new S3Client();

const bucketParams = {
  Bucket: "newbucketverap",
  ACL: "private",
};

const run = async () => {
  try {
    const data = await s3Client.send(new CreateBucketCommand(bucketParams));
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

run();
