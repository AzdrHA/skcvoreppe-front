import {Route, Routes} from 'react-router-dom';
import React from 'react';
import {LoginScreen} from '@screens/Auth/LoginScreen';
import {routes} from '../config/routes';
import {ForgotPasswordScreen} from '@screens/Auth/ForgotPasswordScreen';
import {ResetPasswordScreen} from '@screens/Auth/ResetPasswordScreen';
import {ChangePasswordScreen} from '@screens/Auth/ChangePasswordScreen';
import {NotFound} from '@screens/Exception/NotFound';
import {RegisterScreen} from '@screens/Auth/RegisterScreen';

export const AuthRouter = () => {
  return <Routes>
    <Route path={'*'} element={<NotFound/>} />
    <Route path={routes.login} element={<LoginScreen/>}/>
    <Route path={routes.register} element={<RegisterScreen/>}/>
    <Route path={routes.forgotPassword} element={<ForgotPasswordScreen/>}/>
    <Route path={routes.resetPassword} element={<ResetPasswordScreen/>}/>
    <Route path={routes.changePassword} element={<ChangePasswordScreen/>}/>
  </Routes>;
};
