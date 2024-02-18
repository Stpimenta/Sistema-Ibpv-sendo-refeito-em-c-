export interface gasto{
	valor?:number,
	descricao?:string,
	nome?:string,
	numero_fiscal?:string,
	url_comprovante?:string,
    id_caixa?:number,
    data_gasto?:Date
}


export const interface_gasto_reference:gasto = {
    valor:undefined,
    descricao:undefined,
    nome:undefined,
    numero_fiscal:undefined,
    url_comprovante:undefined,
    data_gasto:undefined,
    id_caixa:undefined,
};