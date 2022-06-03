import React from 'react';
import {LoginForm} from '@components/form/LoginForm';

export const LoginScreen = () => {
  return (
    <div className={'relative w-screen h-screen max-w-screen max-h-screen overflow-hidden'}>
      <div className={'w-screen lg:grid lg:grid-cols-2 z-10 h-full flex items:center justify-center'}>
        <div className={'relative w-screen lg:ml-auto my-auto z-10 ml-0 sm:w-auto w-full sm:h-auto h-full'}>
          <LoginForm/>
        </div>
      </div>
      <img className={'opacity-5 sm:opacity-100 select-none pointer-events-none z-20 sm:z-0 absolute bottom-0 right-0 lg:h-full'} src={'/media/background.png'} alt=""/>
    </div>
  );
};
