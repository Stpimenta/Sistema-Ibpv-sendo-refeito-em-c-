import  {generateSignedUrl} from   '../../shared/services/token_repository/service_generate_token_repository';
import { errorfill } from '../../shared/services/filtererror';
import 'dotenv/config';

let bucket:string;
if(process.env.BUCKET){
    bucket = process.env.BUCKET;
}else{
    console.log('bucket indefinido');
}

export const upload_url  = async (filetype:string): Promise<string|Error> => {
    try {
        const url:string = await generateSignedUrl(bucket,String(Date.now()),filetype,'financeiro');
        return url;
    } catch (error) {
        if(error instanceof Error){
            return Error(errorfill(error).erro);
        }else{
            return 'error';
        }
    }
 
};