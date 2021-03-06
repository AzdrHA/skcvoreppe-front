import React from 'react';
import {useTranslation} from 'react-i18next';
import {ButtonLink} from '@app/component/ui/button/ButtonLink';
import {routes} from '@app/config/routes';

export const NotFound = () => {
  const {t} = useTranslation();

  return (
    <div className={'w-screen h-screen flex items-center justify-center'}>
      <div className={'not-found-content text-center'}>
        <h1 className={'title font-medium text-9xl drop-shadow-xl'}>404</h1>
        <div className={'subtitle mt-2 mb-3'}>
          <h2 className={'font-medium'}>{t('PAGE_DOES_NOT_LOAD')}</h2>
          <p>{t('DONT_WORRY_WE_WILL_SHOW_YOU_ANOTHER_WAY')}</p>
        </div>
        <ButtonLink to={routes.home}>{t('BACK_TO_HOME_PAGE')}</ButtonLink>
      </div>
    </div>
  );
};
