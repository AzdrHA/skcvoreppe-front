import React, {useEffect, useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import {HomeScreen} from '@screens/HomeScreen';
import {routes} from '@app/config/routes';
import {AuthRouter} from '@app/router/AuthRouter';
import {AdminRouter} from '@app/router/AdminRouter';
import {authRefreshTokenRequest} from '@app/api/authRequest';
import {PrivateRouter} from '@app/router/PrivateRouter';
import Cookies from 'js-cookie';
import {adminRole, cookieExpiredAt} from '@app/utils/constante';
import {useAppDispatch} from '@app/reducer/hook';
import {initialUser} from '@app/slice/User/UserSlice';

export const BaseRouter = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const refresh_token = Cookies.get('refresh_token');
    if (refresh_token) {
      authRefreshTokenRequest(refresh_token).then((r) => {
        Cookies.set('refresh_token', r.refresh_token, {expires: cookieExpiredAt});
        dispatch(initialUser(r));
      }).finally(() => setLoading(false));
    }
  }, []);

  return (
    loading ? <>LOADING</> : <Routes>
      <Route path={'*'} element={<AuthRouter/>} />
      <Route path={routes.home} element={<HomeScreen/>}/>
      <Route path={routes.admin.base+'/*'} element={
        <PrivateRouter role={'ROLE_ADMIN'}>
          <AdminRouter/>
        </PrivateRouter>
      }/>
    </Routes>
  );
};
