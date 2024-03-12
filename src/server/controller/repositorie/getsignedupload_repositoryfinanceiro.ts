
import { Response, Request} from 'express';
import * as repositorie from '../../repository';
import { StatusCodes } from 'http-status-codes';
import * as Yup from 'yup';
import { validation } from '../../shared/middlewares';

interface getulr{
    filenames:Array<string>
}

const getUrlSchema:Yup.ObjectSchema<getulr> = Yup.object().shape({
    filenames: Yup.array().of(Yup.string().required()).required(),
});

export const getsignedurl_validation = validation({
    body:getUrlSchema
});

export const getsignedrepositorieurl = async (req:Request<object,object,getulr>, res:Response) =>{
    const url = await repositorie.Repository.getsignedurl(req.body.filenames);
    if(url instanceof Error){
        return res.status(StatusCodes.BAD_REQUEST).json({error:url.message});
    }
    return res.status(StatusCodes.OK).json({
        url:url
    });
};