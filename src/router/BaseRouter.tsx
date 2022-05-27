import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {HomeScreen} from '@screens/HomeScreen';
import {AdminRouter} from '@app/router/AdminRouter';
import {AuthRouter} from '@app/router/AuthRouter';
import {NotFound} from '@screens/Exception/NotFound';

export const BaseRouter = () => {
  return (
    <Routes>
      <Route path={'*'} element={<NotFound/>} />
      <Route path={'/'} element={<HomeScreen/>}/>
      <Route path={'/admin/*'} element={<AdminRouter/>} />
      <Route path={'/auth/*'} element={<AuthRouter/>}/>
    </Routes>
  );
};
