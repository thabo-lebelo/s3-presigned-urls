require('dotenv').config();

var AWS = require('aws-sdk');

var credentials = {
    accessKeyId: process.env.S3_ACCESS_KEY,
    secretAccessKey : process.env.S3_SECRET_KEY
};

var region = process.env.S3_REGION
var bucket = process.env.S3_BUCKET

AWS.config.update({credentials, region, signatureVersion: 'v4'});

var s3 = new AWS.S3();

var presignedPUTURL = s3.getSignedUrl('putObject', {
    Bucket: bucket,
    Key: 'spacex.png', 
    Expires: 100 
});

console.log(presignedPUTURL);