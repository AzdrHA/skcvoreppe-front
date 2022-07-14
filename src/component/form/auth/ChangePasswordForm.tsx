import {BaseForm} from '@app/component/form/BaseForm';
import {BaseHeaderForm} from '@app/component/form/BaseHeaderForm';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {ButtonPrimary} from '@app/component/ui/button/Button';

export const ChangePasswordForm = () => {
  const {t} = useTranslation();
  return (
    <BaseForm>
      <BaseHeaderForm title={t('CHANGE_PASSWORD_PAGE_TITLE')} subtitle={t('CHANGE_PASSWORD_PAGE_SUBTITLE')}/>

      <div className={'pt-8'}/>

      <div className={'footer'}>
        <ButtonPrimary type={'submit'}>{t('UPDATE')}</ButtonPrimary>
      </div>
    </BaseForm>
  );
};
