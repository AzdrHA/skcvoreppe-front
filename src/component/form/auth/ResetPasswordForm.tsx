import React from 'react';
import {BaseForm} from '@app/component/form/BaseForm';
import {BaseHeaderForm} from '@app/component/form/BaseHeaderForm';
import {useTranslation} from 'react-i18next';

export const ResetPasswordForm = () => {
  const {t} = useTranslation();
  return (
    <BaseForm>
      <BaseHeaderForm title={t('INVALID_LINK')} subtitle={t('INVALID_LINK_SUBTITLE', {
        'LOGIN': <span>ccc</span>,
      })}/>
    </BaseForm>
  );
};
