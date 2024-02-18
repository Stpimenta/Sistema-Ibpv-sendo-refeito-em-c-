/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-prototype-builtins */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable indent */

import { db } from '../../databaseconfig';
import { errorfill } from '../../../shared/services/filtererror';
import { jwtService } from '../../../shared/services/JwtService/jwtAcesstoken';
import { Passcrypto } from '../../../shared/services/PassCrypto/Passcrypto';

enum  Rules {
    Root = 1,
    Management = 2,
    Treasury = 4,
    User = 8,
}



export  const sigin = async (data:{senha:string,gmail:string}): Promise < {erro:string, status?:number} | string | undefined > =>{
    let client;
    try {
        client =  await db.connect();
        const data_Db = await client.query(`select membro.senha, membro.id, membro.rule from membro where gmail = $1`,[data.gmail]);
        if(data_Db.rowCount == 0){
            throw Error('email ou senha invalidos');
        }

        if(!await Passcrypto.verifypass(data.senha,data_Db.rows[0].senha)){
            throw Error('email ou senha invalidos');
        }else{
           const Jwt = jwtService.singin({uid:data_Db.rows[0].id, rule:data_Db.rows[0].rule}); // passando o id no token
           if(Jwt instanceof Error){
                return errorfill(Jwt);
           }
           return Jwt;
        }
        
                                                   
    } catch (error) { 
        if(error instanceof Error){
            return errorfill(error);
        }
    } finally{
        client?.release();
    }
}; 