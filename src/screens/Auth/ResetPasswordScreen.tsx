import React from 'react';
import {BaseFormScreen} from '@screens/BaseFormScreen';
import {ResetPasswordForm} from '@app/component/form/auth/ResetPasswordForm/ResetPasswordForm';

export const ResetPasswordScreen = () => {
  return <BaseFormScreen form={<ResetPasswordForm/>}/>;
};
