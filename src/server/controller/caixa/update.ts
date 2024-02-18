import * as Yup from 'yup';
import {Request,Response} from 'express';
import { validation } from '../../shared/middlewares';
import * as providers from '../../database/provider';
import  * as models from '../../database/model';
import { StatusCodes } from 'http-status-codes';

interface propsid{
    id?:number
}

interface propscaixa extends models.caixa{}

const params_id_schema:Yup.ObjectSchema<propsid> = Yup.object().shape({
    id:Yup.number().required().moreThan(0)
});

const bodycaixachema:Yup.ObjectSchema<propscaixa> = Yup.object().shape({
    nome:Yup.string().max(255),
    valor_total: Yup.number()
});


export const validation_caixa_put = validation({
    params:params_id_schema,
    body:bodycaixachema
});


export const put_by_id = async ( req:Request<propsid,object,propscaixa>,res:Response) =>{
    if(req.params.id){
        const provider = await providers.caixa_provider.update_put(req.params.id,req.body);
        if(provider instanceof Error){
            return res.status(StatusCodes.BAD_REQUEST).json({error:provider.message});
        }
        return res.status(StatusCodes.NO_CONTENT).send();
        
    }
};