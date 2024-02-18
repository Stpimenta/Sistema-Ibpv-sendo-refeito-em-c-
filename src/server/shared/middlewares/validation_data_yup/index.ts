/* eslint-disable @typescript-eslint/no-explicit-any */
import { RequestHandler } from 'express';
import * as Yup from 'yup';
import { StatusCodes } from 'http-status-codes';
//criar tipos
type request_component = 'body' | 'params' | 'header' | 'query';

//permitir o envio de um objeto informando onde esta o contrudo e um schema de validacao
type objectvalidation = Partial<Record< request_component, Yup.ObjectSchema<any> > >;
type func_validation = (schema:objectvalidation) => RequestHandler;


export const validation:func_validation = (object_schema_requestcomponent) => (req,res,next) =>{
    const allerrors:Record<string,object> = {};
    for (const keys in object_schema_requestcomponent){
       

        //pegar o schema validar os dados e retornar o resultado
        try {
            object_schema_requestcomponent[keys as request_component]?.validateSync(req[keys as request_component], {abortEarly:false});

        } catch (err) {
            const erro  = err as Yup.ValidationError;
            const objecterro:Record<string,string> = {};
            erro.inner.forEach(erro =>{
                erro.path?
                    objecterro[erro.path] = erro.message : null;
            });
  
            allerrors[keys] = objecterro;
        } 
    }



    if(Object.keys(allerrors).length != 0){
        res.status(StatusCodes.BAD_REQUEST).json(allerrors);
    }else{
        next();
    }
};


