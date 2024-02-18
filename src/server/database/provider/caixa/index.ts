import * as caixa_create_P from './createcaixa';
import * as caixa_delete_P from './deletecaixa';
import * as caixa_get_P from './getbyidcaixa';
import * as caixa_put_P from './updatecaixa';
import * as caixa_getall from './getallcaixa';

export const caixa_provider = {
    ...caixa_create_P,
    ...caixa_delete_P,
    ...caixa_put_P,
    ...caixa_get_P,
    ...caixa_getall,
};