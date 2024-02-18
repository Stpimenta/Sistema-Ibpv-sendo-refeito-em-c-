import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

/* eslint-disable @typescript-eslint/no-unused-vars */
enum  Rules {
    Root = 1,
    Management = 2,
    Treasury = 4,
    User = 8,

}

const definePermissions = {
    [Rules.Root]:[{route: '', metod:['GET','POST','DELETE','PUT']}],

    [Rules.Management]:[{route:'^/membro/$', metod:['GET','POST','DELETE','PUT']},{route:'^/membro/id/\\d+$$', metod:['GET','POST','DELETE','PUT']},
        {route:'^/membro/\\d+$$', metod:['GET','POST','DELETE','PUT']},
        {route:'^/membro_ministerio', metod:['GET','POST','DELETE','PUT']}, {route:'^/evento_ministerio', metod:['GET','POST','DELETE','PUT']},
        {route:'^/ministerio', metod:['GET','POST','DELETE','PUT']}, {route:'^/evento', metod:['GET','POST','DELETE','PUT']}],

    [Rules.Treasury]:[{route:'^/caixa/\\d+$', metod:['GET','POST','DELETE','PUT']},{route:'^/caixa', metod:['GET','POST','DELETE','PUT']},
        {route:'^/gasto$', metod:['GET','POST','DELETE','PUT']}, {route:'^/gasto/\\d+$', metod:['GET','POST','DELETE','PUT']},
        {route:'^/contribuicao$', metod:['GET','POST','DELETE','PUT']}, {route:'^/contribuicao/\\d+$', metod:['GET','POST','DELETE','PUT']},
        {route:'^/evento$', metod:['GET']},],

    [Rules.User]:[{route:'^/evento$', metod:['GET']},]
};

export const ValidationRule: RequestHandler = (req, res, next) => {
    //tipo de permissão
    type permissions = 1 | 2 | 4 | 8;
    const rulesUsuario:permissions = res.locals.rulesUsuario; //pego a permissão do token

    //endpoint e metodo do usuario
    const Userpath = req.path;
    const Usermetod = req.method;


    const  Arraysome = definePermissions[rulesUsuario].some((Rule)=>{

        /*regExp são expressoes regulares usadas para definir padroes etc, como verificar um email
        neste caso as rotas que terminam com id tem uma expressão regular \\d+ que diz que pode vir
        qualquer numero, alem disso todas tem seu inicio e fim definido para RegExp entender o inicio
        e fim do padrão, para n acontecer de /membro liberar /membro_ministerio, alem disso sem passar '' tem acesso a tudo*/

        // testou a rota
        const Pathpermisson = new RegExp(Rule.route);
        const Pathpermissontest =Pathpermisson.test(Userpath);

        //testou o metodo
        const methodPermisson = Rule.metod.includes(Usermetod);

        return  Pathpermissontest && methodPermisson;
    });

    if(Arraysome){
        return next();
    }else{
        return res.status(StatusCodes.UNAUTHORIZED).json({error:'vocé não tem acesso a essa área'});
    }
};