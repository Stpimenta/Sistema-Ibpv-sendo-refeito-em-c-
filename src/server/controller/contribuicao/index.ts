import  * as post from './postcreate';
import * as deletebyid from './delete';
import * as putbyid from './update';
import * as getpage from './getpag';



export const contribuicao_controller = {
    ...post,
    ...deletebyid,
    ...putbyid,
    ...getpage
};