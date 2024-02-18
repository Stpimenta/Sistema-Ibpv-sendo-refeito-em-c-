import * as membro_create_P from './createmembro';
import * as membro_delete_P from './deletemembro';
import * as membro_get_P from './getmembro';
import * as membro_put_P from './updatemembro';
import * as membro_getpage_P from './getmembropag';

export const membro_provider = {
    ...membro_create_P,
    ...membro_delete_P,
    ...membro_put_P,
    ...membro_get_P,
    ...membro_getpage_P,
};