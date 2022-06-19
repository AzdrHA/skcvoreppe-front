import {makeRequest} from '@app/api/makeRequest';
import {ApiConfig} from '@app/config/ApiConfig';
import {ILoginFormData} from '@app/type/form/ILoginFormData';
import {IForgotPasswordFormData} from '@app/component/form/auth/ForgotPasswordForm';

export const authLoginRequest = (data: ILoginFormData) => {
  return makeRequest(ApiConfig.auth.login, 'POST', data, false);
};

export const authForgotPasswordRequest = (data: IForgotPasswordFormData) => {
  return makeRequest(ApiConfig.auth.forgotPassword, 'POST', data, false);
};
