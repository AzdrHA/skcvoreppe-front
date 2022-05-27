import {Route, Routes} from 'react-router-dom';
import React from 'react';
import {LoginScreen} from '@screens/Auth/LoginScreen';
import {NotFound} from '@screens/Exception/NotFound';

export const AuthRouter = () => {
  return <Routes>
    <Route path={'*'} element={<NotFound/>} />
    <Route path="/login" element={<LoginScreen/>}/>
  </Routes>;
};
