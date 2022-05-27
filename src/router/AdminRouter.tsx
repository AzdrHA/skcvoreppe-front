import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {AdminHomeScreen} from '@screens/Admin/AdminHomeScreen';
import {NotFound} from '@screens/Exception/NotFound';

export const AdminRouter = () => {
  return (
    <Routes>
      <Route path={'*'} element={<NotFound/>} />
      <Route path="/" element={<AdminHomeScreen/>}/>
    </Routes>
  );
};
