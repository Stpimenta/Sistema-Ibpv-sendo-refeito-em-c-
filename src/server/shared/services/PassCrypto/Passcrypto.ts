import { compare, genSalt, hash } from 'bcrypt';



//basicamente a quantidade de caracteres randomicos da aplicaçao, se colocar muitos pesa a aplicaçao
const Salt_radomns  = 8;

//cryptografa a senha
const hashpass = async (password:string|undefined):Promise<string>=>{
    if(password){
        const salt = await genSalt(Salt_radomns);
        const hashpassword =  await hash(password,salt);
        return hashpassword;
    }else{
        throw Error('não da para criptografar a senha sem senha');
    }
  
};


//verifica se esta correto
const verifypass =  async (Userpass:string, Cryptografypass:string):Promise<boolean>=>{
    return await compare(Userpass,Cryptografypass);
};


export const Passcrypto = {
    hashpass,
    verifypass,
};


