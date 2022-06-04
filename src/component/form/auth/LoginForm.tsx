import React from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {ILoginForm} from '@app/type/form/ILoginForm';
import {useTranslation} from 'react-i18next';
import {FormLabel} from '@app/component/style/input/FormLabel';
import {FormInputText} from '@app/component/style/input/FormInputText';
import {EmailIcon} from '@app/component/icon/EmailIcon';
import {LockIcon} from '@app/component/icon/LockIcon';
import {FormInputFeedback} from '@app/component/style/input/FormInputFeedback';
import {routes} from '@app/config/routes';
import {BaseForm} from '@app/component/form/BaseForm';
import {BaseHeaderForm} from '@app/component/form/BaseHeaderForm';
import {TextLinkPrimary} from '@app/component/style/button/TextLink';
import {ButtonPrimary} from '@app/component/style/button/Button';

export const LoginForm = () => {
  const {t} = useTranslation();
  const {register, formState, handleSubmit} = useForm<ILoginForm>();

  const onSubmit: SubmitHandler<ILoginForm> = (data) => {
    console.log(data);
  };

  return (
    <BaseForm onSubmit={handleSubmit(onSubmit)}>
      <BaseHeaderForm title={t('NICE_TO_SEE_YOU_AGAIN')} subtitle={t('LOGIN_TO_CONTINUE')}/>

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

        <div className={'pt-8'}/>

        <div className={'form-group'}>
          <FormLabel htmlFor={'password'} required={true}>{t('PASSWORD')}</FormLabel>
          <FormInputText
            icon={<LockIcon/>}
            id={'password'}
            type={'password'}
            placeholder={'•••••••••••••••••••••'}
            required={true}
            register={{...register('password', {required: t('THIS_FIELD_IS_REQUIRED')})}}
            extraClass={formState.errors.password && '!border-warning !focus:border-warning'}
          />
          {
            formState.errors.password &&
            <FormInputFeedback type={'warning'}>{formState.errors.password.message}</FormInputFeedback>
          }
        </div>

        <div className={'pt-8'}/>

        <div className={'form-group sm:grid grid-cols-2'}>
          <div>
            <input className={'mr-1'} type="checkbox" name="remember" id="remember"/>
            <label htmlFor="remember">{t('REMEMBER_ME')}</label>
          </div>
          <div className={'ml-auto'}>
            <TextLinkPrimary to={routes.forgotPassword}>{t('FORGOT_PASSWORD')}</TextLinkPrimary>
          </div>
        </div>
      </div>

      <div className={'pt-8'}/>

      <div className={'footer'}>
        <ButtonPrimary type={'submit'}>{t('LOG_IN')}</ButtonPrimary>
      </div>
    </BaseForm>
  );
};