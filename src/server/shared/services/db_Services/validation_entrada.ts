/* eslint-disable quotes */
export const validation_entrada = (referencedata:object,campos:Array<string>)=>{

    //-------------evitar sql injection-----------//
    const keys_reference:Array<string> = Object.keys(referencedata); //pego um objeto de referencia

    //------evitar o erro vazio do sql -----//
    if(campos.length == 0){
        throw Error(`informe algo: ${keys_reference}`);
    }


    //passo por cada campo se este n estiver presente na referencia vai de f no chat
    campos.forEach((campo)=>{ 
        if(!keys_reference.includes(campo)){
            throw  Error (`${campo} é invalido`);
        }
    });
};
