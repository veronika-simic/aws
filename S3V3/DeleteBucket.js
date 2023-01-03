import {S3Client, DeleteBucketCommand} from '@aws-sdk/client-s3';

const s3Client = new S3Client();

const bucketParams = {Bucket:"verapera24"};


const run = async () => {
    try {
        const data = await s3Client.send(new DeleteBucketCommand(bucketParams));
        console.log('Success', data + " , bucket policy delete");
        
    }catch(err) {
        console.log("error", err);
        
    }
};


run();