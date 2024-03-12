import  {getUrlRepository} from   '../../shared/services/token_repository/service_get_token_repository';
import { errorfill } from '../../shared/services/filtererror';
import 'dotenv/config';

let bucket:string;
if(process.env.BUCKET){
    bucket = process.env.BUCKET;
}else{
    console.log('bucket indefinido');
}

export const getsignedurl  = async (filenames:Array<string>): Promise<Array<string>|Error|string> => {
    try {
        const url = await getUrlRepository(filenames,bucket);
        return url;
    } catch (error) {
        if(error instanceof Error){
            return Error(errorfill(error).erro);
        }else{
            return 'error';
        }
    }
};