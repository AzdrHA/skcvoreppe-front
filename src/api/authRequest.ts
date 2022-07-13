import {makeRequest} from '@app/api/makeRequest';
import {ApiConfig} from '@app/config/ApiConfig';
import {IForgotPasswordFormData} from '@app/component/form/auth/ForgotPasswordForm';
import {LoginFormValues} from '@app/component/form/auth/LoginForm';

export const authLoginRequest = (data: LoginFormValues) => {
  return makeRequest(ApiConfig.auth.login, 'POST', data, false);
};

export const authForgotPasswordRequest = (data: IForgotPasswordFormData) => {
  return makeRequest(ApiConfig.auth.forgotPassword, 'POST', data, false);
};
