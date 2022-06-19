import React from 'react';
import {useTranslation} from 'react-i18next';
import {SubmitHandler, useForm} from 'react-hook-form';
import {BaseForm} from '@app/component/form/BaseForm';
import {BaseHeaderForm} from '@app/component/form/BaseHeaderForm';
import {FormLabel} from '@app/component/style/input/FormLabel';
import {FormInputText} from '@app/component/style/input/FormInputText';
import {EmailIcon} from '@app/component/icon/EmailIcon';
import {FormInputFeedback} from '@app/component/style/input/FormInputFeedback';
import {ButtonPrimary} from '@app/component/style/button/Button';
import {authForgotPasswordRequest} from '@app/api/authRequest';

export type IForgotPasswordFormData = {email: string, accountNotFound: string}
export const ForgotPasswordForm = () => {
  const {t} = useTranslation();
  const {register, formState, handleSubmit, setError, clearErrors} = useForm<IForgotPasswordFormData>();

  const onSubmit: SubmitHandler<IForgotPasswordFormData> = (data) => {
    authForgotPasswordRequest(data).then((r) => {
      console.log('res');
    }).catch((err) => {
      setError('accountNotFound', {type: 'custom', message: t('ACCOUNT_NOT_FOUND')});
    });
  };

  return (
    <BaseForm onSubmit={handleSubmit(onSubmit)}>
      <BaseHeaderForm title={t('FORGOT_PASSWORD')} subtitle={t('FORGOT_PASSWORD_SUBTITLE')}/>

      <div className={'content'}>
        <div className={'form-group'}>
          <FormLabel htmlFor={'email'} required={true}>{t('EMAIL')}</FormLabel>
          <FormInputText
            icon={<EmailIcon/>}
            id={'email'}
            type={'email'}
            placeholder={'exemple@exemple.com'}
            required={true}
            register={{
              ...register('email', {
                required: t('THIS_FIELD_IS_REQUIRED'),
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: t('ENTER_A_VALID_EMAIL'),
                },
              }),
            }}
            extraClass={formState.errors.email && '!border-warning !focus:border-warning'}
          />

          {
            formState.errors.email &&
            <FormInputFeedback type={'warning'}>{formState.errors.email.message}</FormInputFeedback>
          }
        </div>
      </div>

      <div className={'pt-8'}/>

      {
        formState.errors.accountNotFound && <p className={'text-danger text-center pb-1'}>{formState.errors.accountNotFound.message}</p>
      }

      <div className={'footer'}>
        <ButtonPrimary onClick={() => clearErrors('accountNotFound')} type={'submit'}>{t('RESET')}</ButtonPrimary>
      </div>
    </BaseForm>
  );
};
