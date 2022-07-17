import React, {FC, useEffect, useState} from 'react';
import {useLocation, useRoutes} from 'react-router';
import {RootState} from '@app/reducer/store';
import {useAppSelector} from '@app/reducer/hook';
import {useNavigate} from 'react-router-dom';
import {routes} from '@app/config/routes';
import {Unauthorized} from '@screens/Exception/Unauthorized';
import {adminRole} from '@app/utils/constante';

export type PrivateRouterProps = {
  children?: React.ReactNode | ((props: {
    isActive: boolean;
  }) => React.ReactNode);
  role: string
}

export const PrivateRouter: FC<PrivateRouterProps> = (props: PrivateRouterProps) => {
  const [isAuthorized, setAuthorized] = useState(false);
  const user = useAppSelector((state: RootState) => state.user);
  const navigate = useNavigate();
  const location = useLocation();

  const routeAccess = (userRole: string) => {
    return (adminRole.includes(props.role) && adminRole.includes(userRole)) && adminRole.indexOf(props.role) < adminRole.indexOf(userRole);
  };

  useEffect(() => {
    if (!Object.keys(user).length) {
      return navigate(routes.login, {
        state: {
          withRedirection: true,
          redirectTo: location.pathname,
        },
      });
    }
    if ((user && user.role) && routeAccess(user.role)) {
      setAuthorized(true);
    }
  }, [user]);

  return (
    <>
      {
        isAuthorized ? props.children : <Unauthorized/>
      }
    </>
  );
};
