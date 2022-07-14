import React, {useEffect, useState} from 'react';
import {useSearchParams} from 'react-router-dom';
import {authVerifyTokenRequest} from '@app/api/authRequest';
import {
  ResetPasswordFormTokenValid,
} from '@app/component/form/auth/ResetPasswordForm/partial/ResetPasswordFormTokenValid';
import {
  ResetPasswordFormTokenInvalid,
} from '@app/component/form/auth/ResetPasswordForm/partial/ResetPasswordFormTokenInvalid';

export const ResetPasswordForm = () => {
  const [view, setView] = useState(false);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.has('token') && searchParams.has('type')) {
      authVerifyTokenRequest({
        token: searchParams.get('token') as string,
        type: searchParams.get('type') as string,
      }).then((r) => setView(true)).catch((e) => setView(false));
    }
  }, []);

  return (view ? <ResetPasswordFormTokenValid/> : <ResetPasswordFormTokenInvalid/>);
};
