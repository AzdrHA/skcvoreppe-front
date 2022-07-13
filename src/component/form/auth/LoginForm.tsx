import React, {useEffect} from 'react';
import {BaseForm} from '@app/component/form/BaseForm';
import {Formik, FormikHelpers} from 'formik';
import {useTranslation} from 'react-i18next';
import {BaseHeaderForm} from '@app/component/form/BaseHeaderForm';
import {FormField} from '@app/component/style/input/FormField';
import {EmailIcon} from '@app/component/icon/EmailIcon';
import {TextLinkPrimary} from '@app/component/style/button/TextLink';
import {routes} from '@app/config/routes';
import {ButtonPrimary} from '@app/component/style/button/Button';
import {ButtonLink} from '@app/component/style/button/ButtonLink';
import {LoginAreaTypeEnum} from '@app/type/enum/LoginAreaTypeEnum';
import {useNavigate, useSearchParams} from 'react-router-dom';
import {LockIcon} from '@app/component/icon/LockIcon';
import {authLoginRequest} from '@app/api/authRequest';

export type LoginFormValues = {
  email?: string | undefined;
  password?: string | undefined;
  type: string;
  invalidLogin?: string | undefined;
}

const LoginFormInitialValues: LoginFormValues = {
  type: '',
  email: '',
  password: '',
};

export const LoginForm = () => {
  const {t} = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams({type: LoginAreaTypeEnum.MEMBER});
  const navigate = useNavigate();

  useEffect(() => {
    if (searchParams.has('type') && ![LoginAreaTypeEnum.MEMBER, LoginAreaTypeEnum.ADMIN].includes(searchParams.get('type') as LoginAreaTypeEnum)) {
      setSearchParams({type: LoginAreaTypeEnum.MEMBER});
    }
  }, []);

  const onSubmit = (values: LoginFormValues, {setSubmitting, setErrors}: FormikHelpers<LoginFormValues>) => {
    values.type = searchParams.get('type') as LoginAreaTypeEnum;
    authLoginRequest(values).then((r) => {
      return navigate(routes.admin.home);
    }).catch((e) => {
      setErrors({invalidLogin: t('BAD_PASSWORD_OR_EMAIL')});
    });
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={LoginFormInitialValues}
      onSubmit={onSubmit}
      validateOnChange={true}
    >
      {(formState) => (
        <BaseForm>
          <BaseHeaderForm title={t('NICE_TO_SEE_YOU_AGAIN')} subtitle={t('LOGIN_TO_CONTINUE')}/>
          <div className="content">
            <div className="form-group">
              <FormField
                icon={<EmailIcon/>}
                id={'email'}
                type={'email'}
                required={true}
                label={t('EMAIL')}
                placeholder={'exemple@exemple.com'}
                extraClass={(formState.errors.email && '!border-warning !focus:border-warning') || (formState.errors.invalidLogin && 'border-danger')}
              />
            </div>

            <div className={'py-3'}/>

            <div className="form-group">
              <FormField
                icon={<LockIcon/>}
                id={'password'}
                type={'password'}
                label={t('PASSWORD')}
                placeholder={'•••••••••••••••••••••'}
                required={true}
                extraClass={(formState.errors.email && '!border-warning !focus:border-warning') || (formState.errors.invalidLogin && 'border-danger')}
              />
            </div>

            <div className={'py-3'}/>

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

          <div className={'py-3'}/>

          {
            formState.errors.invalidLogin && <p className={'text-danger text-center pb-1'}>{formState.errors.invalidLogin}</p>
          }

          <div className={'footer'}>
            <ButtonPrimary type={'submit'}>{t('LOG_IN')}</ButtonPrimary>
            <ButtonLink extraClass={'mt-2'} to={
              {
                pathname: routes.login,
                search: `?type=${searchParams.get('type') === LoginAreaTypeEnum.ADMIN ? LoginAreaTypeEnum.MEMBER : LoginAreaTypeEnum.ADMIN}`,
              }
            }>{searchParams.get('type') === LoginAreaTypeEnum.ADMIN ? 'Espace Adhérent' : 'Espace Administrateur'}</ButtonLink>
            {
              searchParams.get('type') === LoginAreaTypeEnum.MEMBER && <span className={'block text-center mt-2'}>Pas encore de compte ? <TextLinkPrimary to={routes.register}>inscrivez-vous</TextLinkPrimary></span>
            }
          </div>
        </BaseForm>
      )}
    </Formik>
  );
};
