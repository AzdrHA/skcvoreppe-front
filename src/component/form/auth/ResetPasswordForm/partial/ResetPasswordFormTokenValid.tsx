import {BaseForm} from '@app/component/form/BaseForm';
import {BaseHeaderForm} from '@app/component/form/BaseHeaderForm';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {EmailIcon} from '@app/component/icon/EmailIcon';
import {Formik, FormikHelpers} from 'formik';
import * as Yup from 'yup';
import {authResetPasswordRequest} from '@app/api/authRequest';
import {useNavigate, useSearchParams} from 'react-router-dom';
import {routes} from '@app/config/routes';
import {FormField} from '@app/component/ui/input/FormField';
import {FormFeedback} from '@app/component/ui/input/FormFeedback';
import {ButtonPrimary} from '@app/component/ui/button/Button';
import {TicksIcon} from '@app/component/icon/TicksIcon';
import {hasLowercase, hasNumber, hasUppercase, isLongEnough} from '@app/utils/miscellaneous';

export type ResetPasswordFormTokenValidType = {
  password: string;
  confirmPassword: string;
  token?: string | undefined
  type?: string | undefined
  error?: string | undefined
}

export const ResetPasswordFormTokenValid = () => {
  const {t} = useTranslation(['form']);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const REDIRECT_TIME = 3;

  const onSubmit = (values: ResetPasswordFormTokenValidType, {setSubmitting, setErrors, setStatus}: FormikHelpers<ResetPasswordFormTokenValidType>) => {
    values.token = searchParams.get('token') as string;
    values.type = searchParams.get('type') as string;
    authResetPasswordRequest(values).then((r) => {
      setStatus({status: t('INFO.RESET_PASSWORD_SUCCESS', {
        SECOND: REDIRECT_TIME,
      })});
      setTimeout(() => {
        return navigate(routes.login);
      }, REDIRECT_TIME*1000);
    }).catch((e) => {
      setErrors({error: e.response.data.error});
    });
  };

  return (
    <Formik
      validateOnChange={true}
      initialValues={{password: '', confirmPassword: ''} as ResetPasswordFormTokenValidType}
      onSubmit={onSubmit}
      validationSchema={
        Yup.object().shape({
          password: Yup.string()
              .required(t('WARNING.THIS_FIELD_IS_REQUIRED')),
          confirmPassword: Yup.string().required(t('WARNING.THIS_FIELD_IS_REQUIRED'))
              .oneOf([Yup.ref('password'), null], t('WARNING.CONFIRM_PASSWORD_NOT_MATCH')),
        })
      }
    >
      {(formState) => (
        <BaseForm>
          <BaseHeaderForm title={t('TITLE.RESET_PASSWORD')} subtitle={t('TITLE.RESET_PASSWORD_MUST_BE_DIFFERENT')}/>
          <div className="content">
            <div className="form-group">
              <FormField
                icon={<EmailIcon/>}
                id={'password'}
                type={'password'}
                required={true}
                label={t('NEW_PASSWORD')}
                placeholder={t('PLACEHOLDER.PASSWORD')}
                extraClass={formState.errors.password && '!border-warning !focus:border-warning'}
              />
            </div>

            <div className={'py-3'}/>

            <div className="form-group">
              <FormField
                icon={<EmailIcon/>}
                id={'confirmPassword'}
                type={'password'}
                required={true}
                label={t('CONFIRM_NEW_PASSWORD')}
                placeholder={t('PLACEHOLDER.PASSWORD')}
                extraClass={formState.errors.confirmPassword && '!border-warning !focus:border-warning'}

              />
            </div>
          </div>

          <div className={'pt-6'}>
            <p>{t('PASSWORD_SECURE_INFO')}</p>
            <div className={'grid grid-cols-2 gap-2 mt-2'}>
              <div className={'flex mr-auto'}>
                <TicksIcon extraClass={'mr-2 !text-primary'}/>
                <span className={
                  'text-sm block ' + (isLongEnough(formState.values.password, 8) ? 'text-primary': '')
                }>Minimum 8 caractères</span>
              </div>

              <div className={'flex ml-auto'}>
                <TicksIcon extraClass={'mr-2'}/>
                <span className={
                  'text-sm block ' + (hasLowercase(formState.values.password, 2) ? 'text-primary': '')
                }>
                  2 Minuscules
                </span>
              </div>

              <div className={'flex mr-auto'}>
                <TicksIcon extraClass={'mr-2'}/>
                <span className={
                  'text-sm block ' + (hasUppercase(formState.values.password, 2) ? 'text-primary': '')
                }>
                  2 Majuscules
                </span>
              </div>

              <div className={'flex ml-auto'}>
                <TicksIcon extraClass={'mr-2'}/>
                <span className={
                  'text-sm block ' + (hasNumber(formState.values.password, 2) ? 'text-primary': '')
                }>
                  2 Chiffres
                </span>
              </div>
            </div>
          </div>


          <div className={'pt-3'}/>
          {
            formState.errors.error && <p className={'text-danger text-center pb-1'}>{formState.errors.error}</p>
          }

          {
            formState.status && <FormFeedback message={formState.status.status} type={'info'}/>
          }
          <div className={'pb-3'}/>

          <div className={'footer'}>
            <ButtonPrimary disabled={formState.status && formState.status.status} type={'submit'}>{t('UPDATE_THE_PASSWORD')}</ButtonPrimary>
          </div>
        </BaseForm>
      )}
    </Formik>
  );
};
