// import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
// import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
// import { defaultProvider } from "@aws-sdk/credential-provider-node";

import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import  'dotenv/config';

//intancio um client amazon e especifico sua região // carrega o login direto do env
const s3 = new S3Client(
    {   region: 'us-east-1', }
);

export const generateSignedUrl = async (Bucket:string,Filename:string,FileType:string,Path:string):Promise<string> =>{

    const allowedExtensions = ['pdf', 'png', 'jpeg', 'jpg', 'docx'];

    if(!allowedExtensions.includes(FileType)){
        throw new Error('extensão não permitida');
    }

    const putCommand = new PutObjectCommand({
        //bucketname
        Bucket: Bucket,
        //nome do arquivo
        Key:Path+'/'+Filename+'.'+FileType
    });

    // eslint-disable-next-line no-async-promise-executor
    return new Promise((resolve, reject) => {
        getSignedUrl(s3,putCommand,{
            expiresIn:300
        }).then((url)=>resolve(url))
            .catch((error)=>reject(error))
        ;
    });
   
};








