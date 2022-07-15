import {makeRequest} from '@app/api/makeRequest';
import {ApiConfig} from '@app/config/ApiConfig';
import {LoginFormValues} from '@app/component/form/auth/LoginForm';
import {User} from '@app/type/class/User/User';
import {TokenAuth} from '@app/type/class/TokenAuth';
import Cookies from 'js-cookie';
import {ForgotPasswordFormInitialValuesType} from '@app/component/form/auth/ForgotPasswordForm';
import {
  ResetPasswordFormTokenValidType,
} from '@app/component/form/auth/ResetPasswordForm/partial/ResetPasswordFormTokenValid';

export const authLoginRequest = (data: LoginFormValues): Promise<User & TokenAuth> => {
  return makeRequest(ApiConfig.auth.login, 'POST', data, false);
};

export const authForgotPasswordRequest = (data: ForgotPasswordFormInitialValuesType) => {
  return makeRequest(ApiConfig.auth.forgotPassword, 'POST', data, false);
};

export const authRefreshTokenRequest = (refresh_token: string): Promise<User & TokenAuth> => {
  return makeRequest(ApiConfig.auth.refreshToken, 'POST', {refresh_token}, false);
};

export const authVerifyTokenRequest = (data: {token: string, type: string}) => {
  return makeRequest(ApiConfig.auth.verifyToken, 'POST', data, false);
};

export const authResetPasswordRequest = (data: ResetPasswordFormTokenValidType) => {
  return makeRequest(ApiConfig.auth.resetPassword, 'POST', data, false);
};
