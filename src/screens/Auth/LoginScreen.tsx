import {LoginForm} from '@app/component/form/auth/LoginForm';
import React from 'react';
import {BaseFormScreen} from '@screens/BaseFormScreen';

export const LoginScreen = () => {
  return <BaseFormScreen form={<LoginForm/>}/>;
};
