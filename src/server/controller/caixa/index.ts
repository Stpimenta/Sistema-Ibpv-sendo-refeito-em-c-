import  * as post from './post_create';
import * as deletebyid from './delete';
import * as putbyid from './update';
import * as getall from './getall';
import * as get from './get';



export const caixa_controller = {
    ...post,
    ...deletebyid,
    ...putbyid,
    ...getall,
    ...get
};