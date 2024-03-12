import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';
import { jwtService } from '../services/JwtService/jwtAcesstoken';

export const ensure_authenticatior:RequestHandler = (req,res,next)=>{
    //solicito a propriedade authirization do cabeçalho
    const {authorization} = req.headers; // pego uma propriedade direto



    //caso n exista ja retorno erro
    if(!authorization){
        return res.status(StatusCodes.UNAUTHORIZED).json({error:'não autorizado'});
    }


    //separo o token do tipo, pois o token vem assim: Bearer token...
    const [type,token] = authorization.split(' '); //quebro justamente no espaço e pego os dois primeiros elementos do array
    if(type != 'Bearer'){
        return res.status(StatusCodes.UNAUTHORIZED).json({error:'não autorizado'});
    }

    //verifico se o token é valido;
    const jwt = jwtService.verify(token);

    // se retornar erro n é valido
    if(jwt instanceof Error){
        return res.status(StatusCodes.UNAUTHORIZED).json({error:'não autorizado'});
    }

    //deixo disponivel para aplicaçao o id do usuario e sua rule
    res.locals.idUsuario = jwt.uid.toString();
    res.locals.rulesUsuario = jwt.rule.toString();
    
    //caso não ta livre
    return next();
};