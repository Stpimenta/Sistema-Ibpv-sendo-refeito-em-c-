/* eslint-disable @typescript-eslint/no-unused-vars */
import 'dotenv/config';
import * as Jwt from 'jsonwebtoken';

//token
// o token jwt é basicamente um hash na base 64, sendo facilmente decodificado, porem sua valia esta em gerar o hash de acordo com uma chave,
//funciona dewforma parecida com a geraçao de token da igreja que gera apartir da base 256, o token carrega 3 informaçoes, cabeçalho, payload e 
//parte que vem da chave, a união desses 3 forma um token. 

interface IjwtService{
    uid:number,
    rule:number
}
//pega a chave no ambiente
const token_key = process.env.JWTTOKEN_KEY;


const singin  = (data:IjwtService): Error|string =>{
    // se token key(que esta no ambiente) n existir estora um erro
    if(!token_key){
        return Error ('jwt token key inacessivel');
    }
    return Jwt.sign(data,token_key, {expiresIn:'12h'}); //criou o token e retornei
};  

const verify  = (token:string): Jwt.JwtPayload | Error=>{
    if(!token_key){
        return Error('jwt token key inacessivel');
    }

    // verifico se o token é valido
    try {
        const decoded = Jwt.verify(token,token_key);
        //se for do tipo string n deu para decodificar
        if(typeof decoded == 'string'){
            return Error ('jwt token é invalido');
        }
        //por fim se der tudo certo returno token.
        return decoded;
    } catch (error) {
        return Error('jwt token é invalido');
    }
   
};

export const jwtService = {
    singin,
    verify
};