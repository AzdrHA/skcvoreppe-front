import React, {useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import {HomeScreen} from '@screens/HomeScreen';
import {routes} from '@app/config/routes';
import {AuthRouter} from '@app/router/AuthRouter';
import {AdminRouter} from '@app/router/AdminRouter';
import {authRefreshTokenRequest} from '@app/api/authRequest';

export const BaseRouter = () => {
  useEffect(() => {
    authRefreshTokenRequest();
  }, []);

  return (
    <Routes>
      <Route path={'*'} element={<AuthRouter/>} />
      <Route path={routes.home} element={<HomeScreen/>}/>
      <Route path={routes.admin.base} element={<AdminRouter/>}/>
    </Routes>
  );
};
