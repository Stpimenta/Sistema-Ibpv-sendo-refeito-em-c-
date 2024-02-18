import { errorfill } from '../../../shared/services/filtererror';
import { validation_entrada } from '../../../shared/services/db_Services/validation_entrada';
import { db } from '../../databaseconfig';

type tabela = 'membro' | 'caixa' | 'ministerio' | 'evento' | 'contribuicao' | 'gasto' | 'membro_ministerio' | 'evento_ministerio';

export const update_query  = async (data:object,model:object,id:number,table:tabela): Promise<Error|null> => {
    //------- montar a string para atualizar o campo
    const campos:Array<string> =  Object.keys(data); 
    const valores:Array<string | Date | boolean> = Object.values(data); //tranformar em array os valores

    //validar a entrada
    try {
        validation_entrada(model,campos);
    } catch (error) {
        if(error instanceof Error){
            return Error (errorfill(error).erro);
        }
    }
   
  
   
  
    // formatar os dados parametrizando
    let definite_campos:string = '';
    campos.forEach((values,index) => {
        if(index != campos.length - 1){
            definite_campos += `${values} = $${index+1},`; //adiciona o formato para parametrizar value1 = $2,value2= $3
        }else{
            definite_campos += `${values} = $${index+1}`;
        }
    });

    valores.push(String(id)); // adiciona id na ultima posição do array
    const tamanhoarr:number = Object.keys(data).length + 1; //pegar qual posiçao do array esta o id

    //consulta final
    const Consulta:string = `update ${table} set ${definite_campos} where id = $${tamanhoarr}`;
    let client;
    try {
        client =  await db.connect();
        const data = await client.query(Consulta,valores);
        
        if(data.rowCount == 0){
            throw Error(`${table} inexistente`);
        }
       
    } catch (error) { 
        if(error instanceof Error){
            return Error (errorfill(error).erro);
        }
    } finally{
        client?.release();
    }
    return null;
};