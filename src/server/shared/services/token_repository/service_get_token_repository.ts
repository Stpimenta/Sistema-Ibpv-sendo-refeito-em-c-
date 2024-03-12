/* eslint-disable @typescript-eslint/no-unused-vars */
import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import  'dotenv/config';

const s3 = new S3Client(
    {   region: 'us-east-1', }
);


export const getUrlRepository = (filenames:Array<string>, Bucket:string):Promise<Array<string>> =>{
    const UrlPromisses = filenames.map((filename)=>{
        const getCommand = new GetObjectCommand({
            Bucket: Bucket,
            Key: filename
        });
    
        return getSignedUrl(s3, getCommand, { expiresIn: 3600 });
    });

    return Promise.all(UrlPromisses);
};



