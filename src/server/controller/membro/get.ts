import * as Yup from 'yup';
import {Request,Response} from 'express';
import { validation } from '../../shared/middlewares';
import * as providers from '../../database/provider';
import { StatusCodes } from 'http-status-codes';


interface propsid{
    id?:number
}

const params_id_schema:Yup.ObjectSchema<propsid> = Yup.object().shape({
    id:Yup.number().required()
});

export const validation_membro_getbyid = validation({
    params:params_id_schema
});

export const get_by_id = async (req:Request<propsid>, res:Response)=> {

    // se passar  0 na requisiçao retorna as proprias informacoes 
    if(res.locals.idUsuario && req.params.id == 0){
        req.params.id = Number(res.locals.idUsuario);
    }


    if(req.params.id){
        const provider = await providers.membro_provider.membro_get(req.params.id);

        if(provider instanceof Error){
            return res.status(StatusCodes.BAD_REQUEST).json({'Errors':provider.message});
        }
        return res.status(StatusCodes.OK).json(provider);
         
    }
    
};