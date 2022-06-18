import {makeRequest} from '@app/api/makeRequest';
import {ApiConfig} from '@app/config/ApiConfig';
import {ILoginFormData} from '@app/type/form/ILoginFormData';

export const authLoginRequest = (data: ILoginFormData) => {
  return makeRequest(ApiConfig.auth.login, 'POST', data, false);
};
