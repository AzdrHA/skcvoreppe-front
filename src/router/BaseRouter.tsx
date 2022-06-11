import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {HomeScreen} from '@screens/HomeScreen';
import {NotFound} from '@screens/Exception/NotFound';
import {LoginScreen} from '@screens/Auth/LoginScreen';
import {routes} from '@app/config/routes';
import {ForgotPasswordScreen} from '@screens/Auth/ForgotPasswordScreen';
import {ResetPasswordScreen} from '@screens/Auth/ResetPasswordScreen';
import {ChangePasswordScreen} from '@screens/Auth/ChangePasswordScreen';

export const BaseRouter = () => {
  return (
    <Routes>
      <Route path={'*'} element={<NotFound/>} />
      <Route path={routes.home} element={<HomeScreen/>}/>
      <Route path={routes.login} element={<LoginScreen/>}/>
      <Route path={routes.forgotPassword} element={<ForgotPasswordScreen/>}/>
      <Route path={routes.resetPassword} element={<ResetPasswordScreen/>}/>
      <Route path={routes.changePassword} element={<ChangePasswordScreen/>}/>

      {/* <Route path={`${routes.admin.base}/*`} element={<AdminRouter/>} />*/}
      {/* <Route path={`/*`} element={<AuthRouter/>}/>*/}
    </Routes>
  );
};
