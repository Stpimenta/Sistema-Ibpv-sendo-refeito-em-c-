import * as Yup from 'yup';
import  {validation} from '../../shared/middlewares/index';
import { Response, Request} from 'express';
import * as database from '../../database/provider/index';
import { StatusCodes } from 'http-status-codes';

interface propsId_pag{
    // page?:number,
    // limit?:number,
    id_caixa?:number,
    data_inicio?:Date,
    data_fim?:Date,
}

const props_page_schema:Yup.ObjectSchema<propsId_pag> = Yup.object().shape({
    // page:Yup.number().required(),
    // limit:Yup.number().required().max(30),
    id_caixa:Yup.number().required().moreThan(0),
    data_inicio:Yup.date().required(),
    data_fim:Yup.date().required(),

});

export const validation_contribuicao_page = validation({
    query:props_page_schema
});

export const getpage_by_query = async (req:Request<object,object,object,propsId_pag>,res:Response)=>{
    if(/*req.query.limit && req.query.page*/req.query.id_caixa && req.query.data_inicio && req.query.data_fim){
        const provider = await database.contribuicao_provider.contribuicao_get_page(/*req.query.limit,req.query.page,*/req.query.id_caixa,req.query.data_inicio,req.query.data_fim);
        if(provider instanceof Error){
            return res.status(StatusCodes.BAD_REQUEST).json({error:provider.message});
        }
        return res.status(StatusCodes.OK).json(provider);
    }
};
    