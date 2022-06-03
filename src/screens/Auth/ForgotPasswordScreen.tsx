import React from 'react';
import {BaseFormScreen} from '@screens/BaseFormScreen';
import {ForgotPasswordForm} from '@app/component/form/auth/ForgotPasswordForm';

export const ForgotPasswordScreen = () => {
  return <BaseFormScreen form={<ForgotPasswordForm/>}/>;
};
