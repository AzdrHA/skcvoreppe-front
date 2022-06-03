import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {HomeScreen} from '@screens/HomeScreen';
import {AdminRouter} from '@app/router/AdminRouter';
import {AuthRouter} from '@app/router/AuthRouter';
import {NotFound} from '@screens/Exception/NotFound';
import {LoginScreen} from '@screens/Auth/LoginScreen';
import {routes} from '@app/config/routes';

export const BaseRouter = () => {
  return (
    <Routes>
      <Route path={'*'} element={<NotFound/>} />
      <Route path={routes.home} element={<HomeScreen/>}/>
      <Route path={routes.login} element={<LoginScreen/>}/>
      <Route path={`${routes.admin.base}/*`} element={<AdminRouter/>} />
      {/* <Route path={`/*`} element={<AuthRouter/>}/>*/}
    </Routes>
  );
};
