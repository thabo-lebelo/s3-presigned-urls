require('dotenv').config();

var AWS = require('aws-sdk');

var credentials = {
    accessKeyId: process.env.S3_ACCESS_KEY,
    secretAccessKey : process.env.S3_SECRET_KEY
};

var region = process.env.S3_REGION
var bucket = process.env.S3_BUCKET

AWS.config.update({credentials, region});

var s3 = new AWS.S3();

var presignedGETURL = s3.getSignedUrl('getObject', {
    Bucket: bucket,
    Key: 'logo.png', 
    Expires: 100 
});

console.log(presignedGETURL);

