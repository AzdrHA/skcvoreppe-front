import React, {useEffect} from 'react';
import {BaseForm} from '@app/component/form/BaseForm';
import {Formik, FormikHelpers} from 'formik';
import {useTranslation} from 'react-i18next';
import {BaseHeaderForm} from '@app/component/form/BaseHeaderForm';
import {FormField} from '@app/component/ui/input/FormField';
import {EmailIcon} from '@app/component/icon/EmailIcon';
import {TextLinkPrimary} from '@app/component/ui/button/TextLink';
import {routes} from '@app/config/routes';
import {ButtonPrimary} from '@app/component/ui/button/Button';
import {ButtonLink} from '@app/component/ui/button/ButtonLink';
import {LoginAreaTypeEnum} from '@app/type/enum/LoginAreaTypeEnum';
import {useNavigate, useSearchParams} from 'react-router-dom';
import {LockIcon} from '@app/component/icon/LockIcon';
import {authLoginRequest} from '@app/api/authRequest';
import Cookies from 'js-cookie';
import {cookieExpiredAt} from '@app/utils/constante';
import {useAppDispatch} from '@app/reducer/hook';
import {initialUser} from '@app/slice/User/UserSlice';
import {useLocation} from 'react-router';

export type LoginFormValues = {
  email?: string | undefined;
  password?: string | undefined;
  type: string;
  error?: string | undefined;
  remember: boolean
}

export const LoginForm = () => {
  const {t} = useTranslation(['form']);
  const [searchParams, setSearchParams] = useSearchParams({type: LoginAreaTypeEnum.MEMBER});
  const navigate = useNavigate();
  const location = useLocation() as {state?: {redirectTo: string}};
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (searchParams.has('type') && ![LoginAreaTypeEnum.MEMBER, LoginAreaTypeEnum.ADMIN].includes(searchParams.get('type') as LoginAreaTypeEnum)) {
      setSearchParams({type: LoginAreaTypeEnum.MEMBER});
    }
  }, []);

  const onSubmit = (values: LoginFormValues, {setSubmitting, setErrors}: FormikHelpers<LoginFormValues>) => {
    values.type = searchParams.get('type') as LoginAreaTypeEnum;
    authLoginRequest(values).then((r) => {
      Cookies.set('refresh_token', r.refresh_token, {expires: cookieExpiredAt});
      dispatch(initialUser(r));
    }).catch((e) => {
      setErrors({error: e.response.data.error});
    }).finally(() => {
      setSubmitting(false);
      if (location.state && location.state.redirectTo) {
        return navigate(location.state.redirectTo);
      }
      if (values.type === LoginAreaTypeEnum.ADMIN) {
        return navigate(routes.admin.home);
      }
      return navigate(routes.home);
    });
  };

  return (
    <Formik
      initialValues={{
        type: '',
        email: '',
        password: '',
        remember: false,
      }}
      onSubmit={onSubmit}
      validateOnChange={true}
    >
      {(formState) => (
        <BaseForm>
          <BaseHeaderForm title={t('TITLE.NICE_TO_SEE_YOU_AGAIN')} subtitle={t('TITLE.LOGIN_TO_CONTINUE')}/>
          <div className="content">
            <div className="form-group">
              <FormField
                icon={<EmailIcon/>}
                id={'email'}
                type={'email'}
                required={true}
                label={t('EMAIL')}
                placeholder={t('PLACEHOLDER.EMAIL')}
                extraClass={(formState.errors.email && '!border-warning !focus:border-warning') || (formState.errors.error && 'border-danger')}
              />
            </div>

            <div className={'py-3'}/>

            <div className="form-group">
              <FormField
                icon={<LockIcon/>}
                id={'password'}
                type={'password'}
                label={t('PASSWORD')}
                placeholder={t('PLACEHOLDER.PASSWORD')}
                required={true}
                extraClass={(formState.errors.email && '!border-warning !focus:border-warning') || (formState.errors.error && 'border-danger')}
              />
            </div>

            <div className={'py-3'}/>

            <div className={'form-group sm:grid grid-cols-2'}>
              <div className="form-group">
                <FormField
                  id={'remember'}
                  type={'checkbox'}
                  label={t('REMEMBER_ME')}
                  extraClass={(formState.errors.email && '!border-warning !focus:border-warning') || (formState.errors.error && 'border-danger')}
                />
              </div>
              <div className={'ml-auto'}>
                <TextLinkPrimary to={routes.forgotPassword}>{t('FORGOT_PASSWORD')}</TextLinkPrimary>
              </div>
            </div>
          </div>

          <div className={'py-3'}/>

          {
            formState.errors.error && <p className={'text-danger text-center pb-1'}>{formState.errors.error}</p>
          }

          <div className={'footer'}>
            <ButtonPrimary type={'submit'}>{t('LOG_IN')}</ButtonPrimary>
            <ButtonLink extraClass={'mt-2'} to={
              {
                pathname: routes.login,
                search: `?type=${searchParams.get('type') === LoginAreaTypeEnum.ADMIN ? LoginAreaTypeEnum.MEMBER : LoginAreaTypeEnum.ADMIN}`,
              }
            }>{searchParams.get('type') === LoginAreaTypeEnum.ADMIN ? t('AREA_MEMBER') : t('AREA_ADMIN')}</ButtonLink>
            {
              searchParams.get('type') === LoginAreaTypeEnum.MEMBER && <span className={'block text-center mt-2'}>Pas encore de compte ? <TextLinkPrimary to={routes.register}>inscrivez-vous</TextLinkPrimary></span>
            }
          </div>
        </BaseForm>
      )}
    </Formik>
  );
};
