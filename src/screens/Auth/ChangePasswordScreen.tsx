import React from 'react';
import {BaseFormScreen} from '@screens/BaseFormScreen';
import {ChangePasswordForm} from '@app/component/form/auth/ChangePasswordForm';

export const ChangePasswordScreen = () => {
  return <BaseFormScreen form={<ChangePasswordForm/>}/>;
};
