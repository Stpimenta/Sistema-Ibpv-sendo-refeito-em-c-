/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-prototype-builtins */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable indent */
import * as model from '../../model';
import { db } from '../../databaseconfig';
import { errorfill } from '../../../shared/services/filtererror';
import { validation_entrada } from '../../../shared/services/db_Services/validation_entrada';




interface id {
    id:number|string
}

type tabela = 'membro' | 'caixa' | 'ministerio' | 'evento' | 'contribuicao' | 'gasto' | 'membro_ministerio' | 'ministerio_evento';




export  const create = async (data:object, tabela:tabela, reference_object:object): Promise<id | Error | undefined > =>{



    const campos = Object.keys(reference_object); //pego um objeto de referencia 
    let paramns:string = '';
    const values_query = data as {[key: string]: any};   /*{[key: string]: any} uso isso porque o Ts por segurança n permite 
                                                            usar string sem tipagem como key para um objeto, para isso eu falo que
                                                            a key do objeto é uma string*/



    //validar a entrada
    try {
        validation_entrada(reference_object,Object.keys(data));
    } catch (error) {
        if(error instanceof Error){
            return Error (errorfill(error).erro);
        }
    }

    campos.forEach((value,index)=>{
         //faço uma string de parametrizaçao $1, $2 etc...
        if(index == campos.length - 1){
            paramns += `$${index+1}`;  
        }else{
            paramns += `$${index+1},`; 
        }                                            
        if(!values_query.hasOwnProperty(value)){    /*hasOwnProperty basicamente retorna true se tem a chave e false se n 
                                                    tiver essa chave o objetivo é colocar null nas chaves que o usuario 
                                                    não especificar.*/  
            values_query[value] = null;
        }
    });


    const campos_query = Object.keys(values_query);   //monto um vetor com os campos na ordem que esta na solicitaçao do usuario
    
    let client;

    //tabelas associativas não tem id
    let stringquery:string = '';
    if(tabela == 'membro_ministerio' || tabela == 'ministerio_evento'){
        stringquery = `insert into ${tabela}(${campos_query.toString()}) values (${paramns})`;
    } else{
        stringquery = `insert into ${tabela}(${campos_query.toString()}) values (${paramns}) returning id`;
    }

   

    // console.log(values_query);
    // console.log(stringquery);
    // console.log(Object.values(values_query));
    
    try {
        client =  await db.connect();
        const querydata = await client.query(`${stringquery}`,
                                            Object.values(values_query)); 
                                            
                                            try {
                                                return {id:querydata.rows[0].id};
                                            } catch (error) {
                                                return{id:'compost'};  
                                            }
                                                                      
    } catch (error) { 
        if(error instanceof Error){
            return Error(errorfill(error).erro);
        }
    } finally{
        client?.release();
    }
}; 