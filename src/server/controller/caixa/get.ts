import * as Yup from 'yup';
import {Request,Response} from 'express';
import { validation } from '../../shared/middlewares';
import * as providers from '../../database/provider';
import { StatusCodes } from 'http-status-codes';


interface propsid{
    id?:number
}

const params_id_schema:Yup.ObjectSchema<propsid> = Yup.object().shape({
    id:Yup.number().required().moreThan(0)
});

export const validation_caixa_getbyid = validation({
    params:params_id_schema
});

export const get_by_id = async (req:Request<propsid>, res:Response)=> {

    if(req.params.id){
        const provider = await providers.caixa_provider.caixa_get(req.params.id);

        if(provider instanceof Error){
            return res.status(StatusCodes.BAD_REQUEST).json({'Errors':provider.message});
        }
        return res.status(StatusCodes.OK).json(provider);
         
    }
    
};