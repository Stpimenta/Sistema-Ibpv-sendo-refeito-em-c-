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

export const validation_membro_delete = validation({
    params:params_id_schema
});

export const delete_by_id = async (req:Request<propsid>, res:Response)=> {
   
    if(req.params.id){
        const provider = await providers.membro_provider.membro_delete(req.params.id);
        if (provider instanceof Error){
            return res.status(StatusCodes.BAD_REQUEST).send(provider.message);
        }
        return res.status(StatusCodes.NO_CONTENT).send();
        
    }
    
};

