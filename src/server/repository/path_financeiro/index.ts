import  * as upload_url from './upload_url';
import  * as get_signedurl from './getsigned_repository_url';
export const Repository = {
    ...upload_url,
    ...get_signedurl
};