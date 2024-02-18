import * as membro_ministerio_create_P from './createmembroministerio';
import * as membro_ministerio_delete_P from './delete';

export const membro_miniterio_provider = {
    ...membro_ministerio_create_P,
    ...membro_ministerio_delete_P
};