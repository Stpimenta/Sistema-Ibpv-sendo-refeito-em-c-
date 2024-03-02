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

interface propscontribuicao extends models.contribuicao{}

const params_id_schema:Yup.ObjectSchema<propsid> = Yup.object().shape({
    id:Yup.number().required().moreThan(0)
});


const bodycontribuicaochema:Yup.ObjectSchema<propscontribuicao> = Yup.object().shape({
    valor:Yup.number(),
    descricao:Yup.string(),
    data_contribuicao: Yup.date(),
    id_membro:Yup.number().moreThan(0),
    id_caixa: Yup.number().moreThan(0),
    url_envelope:Yup.string(),
    
});


export const validation_contribuicao_put = validation({
    params:params_id_schema,
    body:bodycontribuicaochema
});


export const put_by_id = async ( req:Request<propsid,object,propscontribuicao>,res:Response) =>{
    if(req.params.id){
        const provider = await providers.contribuicao_provider.update_put(req.params.id,req.body);
        if(provider instanceof Error){
            return res.status(StatusCodes.BAD_REQUEST).json({error:provider.message});
        }
        return res.status(StatusCodes.NO_CONTENT).send();
        
    }
};

