import React from 'react';
import {BaseForm} from '@app/component/form/BaseForm';
import {BaseHeaderForm} from '@app/component/form/BaseHeaderForm';
import {useTranslation} from 'react-i18next';
import {TextLinkPrimary} from '@app/component/style/button/TextLink';
import {routes} from '@app/config/routes';
import {ButtonLink} from '@app/component/style/button/ButtonLink';

export const ResetPasswordForm = () => {
  const {t} = useTranslation();
  const subtitle = <>{t('INVALID_LINK_SUBTITLE_PART_1')} <TextLinkPrimary to={routes.login}>Connexion</TextLinkPrimary> {t('INVALID_LINK_SUBTITLE_PART_2')}</>;
  return (
    <BaseForm>
      <BaseHeaderForm title={t('INVALID_LINK')} subtitle={subtitle}/>

      <div className="content">
        <ButtonLink extraClass={'block w-full text-center'} to={routes.home}>{t('HOME_PAGE')}</ButtonLink>
        <div className={'py-1'}/>
        <ButtonLink extraClass={'block w-full text-center'} to={routes.login}>{t('LOGIN_PAGE')}</ButtonLink>
      </div>
    </BaseForm>
  );
};
