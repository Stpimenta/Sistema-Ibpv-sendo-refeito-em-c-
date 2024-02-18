import * as Yup from 'yup';
import {Request,Response} from 'express';
import { validation } from '../../shared/middlewares';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as providers from '../../database/provider';
import  * as models from '../../database/model';
import { StatusCodes } from 'http-status-codes';

interface propsid{
    id?:number
}

interface propsgasto extends models.gasto{}

const params_id_schema:Yup.ObjectSchema<propsid> = Yup.object().shape({
    id:Yup.number().required().moreThan(0)
});

const bodygastochema:Yup.ObjectSchema<propsgasto> = Yup.object().shape({
    valor:Yup.number().required(),
    descricao:Yup.string(),
    nome:Yup.string().required(),
    numero_fiscal:Yup.string(),
    url_comprovante:Yup.string(),
    id_caixa: Yup.number().required().moreThan(0),
    data_gasto: Yup.date().required()
});

export const validation_gasto_put = validation({
    params:params_id_schema,
    body:bodygastochema
});


export const put_by_id = async ( req:Request<propsid,object,propsgasto>,res:Response) =>{
    if(req.params.id){
        const provider = await providers.gasto_provider.update_put(req.params.id,req.body);
        if(provider instanceof Error){
            return res.status(StatusCodes.BAD_REQUEST).json({error:provider.message});
        }
        return res.status(StatusCodes.NO_CONTENT).send();
        
    }
};

