import { StatusCodes } from 'http-status-codes';

/* eslint-disable no-useless-escape */
export const errorfill = (error:Error): {erro:string,status?:number} =>{
    // se a prorpriedade code e detail tiver no erro, provavelmente e do banco
    if('code' in error && 'detail' in error){
        if (error.code == 23505){ //codigo de  quebra de unicidade
            if(error.message.includes('gmail')){
                return {erro:'gmail ja esta em uso'};
            }

            if(error.message.includes('cpf')){
                return {erro:'cpf ja esta em uso'};
            }

            if(error.message.includes('nome')){
                return {erro:'nome ja esta em uso'};
            }

            if(error.message.includes('ministerio_eventos')){
                return {erro:'ministerio ja esta vinculado a este evento'};
            }

            if(error.message.includes('membro_ministerio')){
                return {erro:'membro ja esta vinculado a este ministerio'};
            }

        }

        if (error.code == 23503){ //codigo de  quebra de unicidade
            if(error.message.includes('"gasto" viola restrição de chave estrangeira')){
                return {erro:'caixa inexistente'};
            }

            if(error.message.includes('em tabela "contribuicao" viola restrição de chave estrangeir')){
                return  {erro:'caixa inexistente'};
            }
 
        }
    } 
  
    if(error.message){
     
        //erros propios lançados por mim
        if(error.message.includes('é invalido')){
            return {erro:error.message};
        }

        if(error.message.includes('inexistente')){
            return {erro:error.message};
        }

        if(error.message.includes('email ou senha')){
            return {erro:error.message,status:StatusCodes.BAD_REQUEST};
        }

        if(error.message.includes('jwt token key inacessivel')){
            return {erro:error.message, status:StatusCodes.INTERNAL_SERVER_ERROR};
        }

        if(error.message.includes('informe algo:')){
            return {erro:error.message};
        }
            

        if(error.message.includes('informe algo:')){
            return {erro:error.message};
        }
            
    }
    
    return {erro:'erro desconhecido'};
};