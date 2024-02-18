import * as Yup from 'yup';
import  {validation} from '../../shared/middlewares/index';
import { Response, Request} from 'express';
import * as database from '../../database/provider/index';
import { StatusCodes } from 'http-status-codes';

interface propsId_pag{
    page?:number,
    limit?:number
}

const props_page_schema:Yup.ObjectSchema<propsId_pag> = Yup.object().shape({
    page:Yup.number().required(),
    limit:Yup.number().required().max(30),
});

export const validation_membro_page = validation({
    query:props_page_schema
});

export const getpage_by_query = async (req:Request<object,object,object,propsId_pag>,res:Response)=>{
    if(req.query.limit && req.query.page){
        const provider = await database.membro_provider.membro_get_page(req.query.limit,req.query.page);
        if(provider instanceof Error){
            return res.status(StatusCodes.BAD_REQUEST).json({error:provider.message});
        }
        return res.status(StatusCodes.OK).json(provider);
    }
};
    
    
