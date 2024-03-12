
import { Response, Request} from 'express';
import * as repositorie from '../../repository';
import { StatusCodes } from 'http-status-codes';



interface getulrparamns{
    filetype?:string
}


export const getrepositorieToken = async (req:Request<getulrparamns>, res:Response) =>{
    if(req.params.filetype){
        const url = await repositorie.Repository.upload_url(req.params.filetype);
        if(url instanceof Error){
            return res.status(StatusCodes.BAD_REQUEST).json({error:url.message});
        }
        return res.status(StatusCodes.OK).json({
            url:url
        });
    }
};