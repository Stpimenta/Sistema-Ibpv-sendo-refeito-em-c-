import * as Yup from 'yup';
import {Request,Response} from 'express';
import { validation } from '../../shared/middlewares';
import * as providers from '../../database/provider';
import  * as models from '../../database/model';
import { StatusCodes } from 'http-status-codes';

interface propsid{
    id?:number
}

interface propsevento extends models.evento{}

const params_id_schema:Yup.ObjectSchema<propsid> = Yup.object().shape({
    id:Yup.number().required().moreThan(0)
});

const bodyeventochema:Yup.ObjectSchema<propsevento> = Yup.object().shape({
    nome:Yup.string(),
    descricao:Yup.string().max(400),
    data_evento: Yup.date()
});


export const validation_evento_put = validation({
    params:params_id_schema,
    body:bodyeventochema
});


export const put_by_id = async ( req:Request<propsid,object,propsevento>,res:Response) =>{
    if(req.params.id){
        const provider = await providers.evento_provider.update_put(req.params.id,req.body);
        if(provider instanceof Error){
            return res.status(StatusCodes.BAD_REQUEST).json({error:provider.message});
        }
        return res.status(StatusCodes.NO_CONTENT).send();
        
    }
};