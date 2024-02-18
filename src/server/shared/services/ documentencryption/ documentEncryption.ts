/* eslint-disable @typescript-eslint/no-unused-vars */
import { createCipheriv, scryptSync, createDecipheriv} from 'crypto';
import 'dotenv/config';
/* fiz pensando em criptografar coisas como nome etc que podem 
    ter dois repetidos, porem so vou criptografar documentos que ja sao unicos no banco */

// config
const password =  process.env.DOC_ENCRYPTEDPASS; //chave 

if(!password){
    throw Error('token de criptografia indisponivel');
}

const key = scryptSync(password, 'salt', 32);   // transformando a chave em 32 bytes
const algoritmo = 'aes-256-cbc';
const iv:Buffer = scryptSync(password, 'salt', 16);   // transformando a chave em 32 bytes


const encrypt = (data:string|undefined)=>{
    if(data){
        //cetei as configuraçoes para gerar a criptografia
        const dataEncrypt = createCipheriv(algoritmo, key, iv);
        // concatenei os dois buffer e convertir para hexadecimal
        const encrypted  = Buffer.concat([dataEncrypt.update(data, 'utf-8'), dataEncrypt.final()]).toString('hex'); 
        //separo o iv para conseguir usar para descriptografar
        const IvEncrypted = `${iv.toString('hex')}:${encrypted}`;
        return IvEncrypted;
    }else{
        throw Error('impossivel fazer encrypt sem data');
    }
};

const decrypt = (data:string|undefined) =>{
    //separo  os dados
    if(data){
        const [iv,hashcryptography] = data.split(':');
        //configuro a descriptografaçao
        const datadescrypted = createDecipheriv(algoritmo, key, Buffer.from(iv,'hex')); //converter o iv novamente em buffer
        // descriptografo
        const descrypted  = Buffer.concat([datadescrypted.update(Buffer.from(hashcryptography, 'hex')), datadescrypted.final()]).toString('utf-8'); 
        return descrypted;
    }else {
        throw Error('impossivel fazer decrypt sem data');
    } 
};

export const servicedocumentEncryption = {
    decrypt,
    encrypt
};





