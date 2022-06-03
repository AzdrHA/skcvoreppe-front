import React from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {ILoginForm} from '@app/type/form/ILoginForm';
import {FormLabel} from '@components/form/component/FormLabel';
import {FormInputText} from '@components/form/component/FormInputText';
import {useTranslation} from 'react-i18next';
import {EmailIcon} from '@components/Icons/EmailIcon';
import {LockIcon} from '@components/Icons/LockIcon';
import {ButtonPrimary} from '@components/style/button/Button';
import {TextLinkPrimary} from '@components/style/button/TextLink';

export const LoginForm = () => {
  const {t} = useTranslation();
  const {register, formState, handleSubmit} = useForm<ILoginForm>();

  const onSubmit: SubmitHandler<ILoginForm> = (data) => {
    console.log(data);
  };

  return (
    <form className={'shadow-[0_0px_10px_0px_rgba(0,0,0,0.25)] inline-block px-5 py-14 rounded bg-white sm:w-auto w-full sm:h-auto h-full sm:block flex flex-col justify-between'}
      onSubmit={handleSubmit(onSubmit)}>

      <div className={'header'}>
        <div className={'title'}>
          <h1 className={'text-4xl font-semibold uppercase'}>{t('NICE_TO_SEE_YOU_AGAIN')}</h1>
        </div>
        <div className={'subtitle'}>
          <h2 className={'font-light'}>{t('LOGIN_TO_CONTINUE')}</h2>
          <div className={'mb-8 w-full h-px bg-sky-blue-100'}/>
        </div>
      </div>

      <div className={'content'}>
        <div className={'form-group'}>
          <FormLabel htmlFor={'email'} required={true}>{t('EMAIL')}</FormLabel>
          <FormInputText
            icon={<EmailIcon/>}
            id={'email'}
            type={'email'}
            placeholder={'exemple@exemple.com'}
            required={true}
            register={{...register('email', {
              required: t('THIS_FIELD_IS_REQUIRED'),
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Please enter a valid email address.',
              },
            })}}
            extraClass={formState.errors.email && 'border-warning focus:border-warning'}
          />
          {formState.errors.email && <span className={'text-xs text-warning inline-block font-medium'}>{formState.errors.email.message}</span>}
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
            extraClass={formState.errors.password && 'border-warning focus:border-warning'}
          />
          {formState.errors.password && <span className={'text-xs text-warning inline-block font-medium'}>{formState.errors.password.message}</span>}
        </div>

        <div className={'pt-8'}/>

        <div className={'form-group sm:grid grid-cols-2'}>
          <div>
            <input className={'mr-1'} type="checkbox" name="remember" id="remember"/>
            <label htmlFor="remember">{t('REMEMBER_ME')}</label>
          </div>
          <div className={'ml-auto'}>
            <TextLinkPrimary to={'/'}>{t('FORGOT_PASSWORD')}</TextLinkPrimary>
          </div>
        </div>
      </div>

      <div className={'pt-8'}/>

      <div className={'footer'}>
        <ButtonPrimary type={'submit'}>{t('LOG_IN')}</ButtonPrimary>
      </div>
    </form>
  );
};
