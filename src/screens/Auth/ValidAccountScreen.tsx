import React, {useEffect, useState} from 'react';
import {useSearchParams} from 'react-router-dom';
import {authVerifyTokenRequest} from '@app/api/authRequest';
export const ValidAccountScreen = () => {
  const [searchParams] = useSearchParams();
  const [isInvalid, setInvalid] = useState(false);

  useEffect(() => {
    const token = searchParams.get('token') as string;
    const type = searchParams.get('type') as string;
    if (token && type) {
      authVerifyTokenRequest({token, type}).then((r) => {
      }).catch((e) => setInvalid(true));
    }
  }, []);

  return (
    <>
      {
        isInvalid ? <div>INVALID</div> : <div>VALID</div>
      }
    </>
  );
};
