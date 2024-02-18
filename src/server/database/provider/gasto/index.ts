import * as gasto_create_P from './creategasto';
import * as gasto_delete_P from './deletegasto';
import * as gasto_put_P from './updategasto';
import * as gasto_getpage_P from './getgastopag';

export const gasto_provider = {
    ...gasto_create_P,
    ...gasto_delete_P,
    ...gasto_put_P,
    ...gasto_getpage_P,
};