import {useTranslation} from 'react-i18next';
import {ButtonLink} from '@app/component/ui/button/ButtonLink';
import {routes} from '@app/config/routes';
import React from 'react';

export const Unauthorized = () => {
  const {t} = useTranslation();

  return (
    <div className={'w-screen h-screen flex items-center justify-center'}>
      <div className={'not-found-content text-center'}>
        <h1 className={'title font-medium text-9xl drop-shadow-xl'}>401</h1>
        <div className={'subtitle mt-2 mb-3'}>
          <h2 className={'font-medium'}>{t('HOLD_UP')}</h2>
          <p>{t('ACCESS_NOT_ALLOWED')}</p>
        </div>
        <ButtonLink to={routes.home}>{t('BACK_TO_HOME_PAGE')}</ButtonLink>
      </div>
    </div>
  );
};
