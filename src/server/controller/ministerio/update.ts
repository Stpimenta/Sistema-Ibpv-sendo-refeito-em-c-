import * as Yup from 'yup';
import {Request,Response} from 'express';
import { validation } from '../../shared/middlewares';
import * as providers from '../../database/provider';
import  * as models from '../../database/model';
import { StatusCodes } from 'http-status-codes';

interface propsid{
    id?:number
}

interface propsbody extends models.ministerio_model{}

const params_id_schema:Yup.ObjectSchema<propsid> = Yup.object().shape({
    id:Yup.number().required().moreThan(0)
});

const bodyministeriochema:Yup.ObjectSchema<propsbody> = Yup.object().shape({
    nome:Yup.string().max(255).min(2),
    descricao:Yup.string().max(255).min(2),
});


export const validation_ministerio_put = validation({
    params:params_id_schema,
    body:bodyministeriochema
});


export const put_by_id = async ( req:Request<propsid,object,propsbody>,res:Response) =>{
    if(req.params.id){
        const provider = await providers.ministerio_provider.update_put(req.params.id,req.body);
        if(provider instanceof Error){
            return res.status(StatusCodes.BAD_REQUEST).json({error:provider.message});
        }
        return res.status(StatusCodes.NO_CONTENT).send();
        
    }
};