import React from 'react';
import {BaseFormScreen} from '@screens/BaseFormScreen';
import {RegisterForm} from '@app/component/form/auth/RegisterForm';

export const RegisterScreen = () => {
  return <BaseFormScreen form={<RegisterForm/>}/>;
};
