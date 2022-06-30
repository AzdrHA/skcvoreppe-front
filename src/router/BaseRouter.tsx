import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {HomeScreen} from '@screens/HomeScreen';
import {routes} from '@app/config/routes';
import {AuthRouter} from '@app/router/AuthRouter';

export const BaseRouter = () => {
  return (
    <Routes>
      <Route path={'*'} element={<AuthRouter/>} />
      <Route path={routes.home} element={<HomeScreen/>}/>
    </Routes>
  );
};
