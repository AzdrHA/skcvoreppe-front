import React from 'react';
import {ButtonLink} from '@app/component/style/button/ButtonLink';
import {routes} from '@app/config/routes';
import {LoginAreaTypeEnum} from '@app/type/enum/LoginAreaTypeEnum';

export const MaintenanceScreen = () => {
  return (
    <div className={'w-screen h-screen flex items-center justify-center'}>
      <div className={'not-found-content text-center'}>
        <div className={'subtitle mt-2 mb-3'}>
          <h2 className={'font-medium'}>{'Maintenance'}</h2>
          <p>{'Le site est actuellement en maintenance'}</p>
        </div>
        <ButtonLink to={{
          pathname: routes.login,
          search: `?type=${LoginAreaTypeEnum.ADMIN}`,
        }}>{'Se connecter pour les admin'}</ButtonLink>

        <ButtonLink to={{
          pathname: routes.login,
          search: `?type=${LoginAreaTypeEnum.MEMBER}`,
        }}>{'Accès espace Adhérent'}</ButtonLink>
      </div>
    </div>
  );
};
