import React from 'react';
import {useTranslation} from 'react-i18next';
import {BaseForm} from '@app/component/form/BaseForm';
import {BaseHeaderForm} from '@app/component/form/BaseHeaderForm';
import {Formik, FormikHelpers} from 'formik';
import {FormField} from '@app/component/ui/input/FormField';
import {EmailIcon} from '@app/component/icon/EmailIcon';
import {ButtonPrimary} from '@app/component/ui/button/Button';
import {authForgotPasswordRequest} from '@app/api/authRequest';
import {FormFeedback} from '@app/component/ui/input/FormFeedback';

export type ForgotPasswordFormInitialValuesType = {
  email?: string | undefined;
  error?: string | undefined;
}

export const ForgotPasswordForm = () => {
  const {t} = useTranslation(['form']);

  const onSubmit = (values: ForgotPasswordFormInitialValuesType, {setSubmitting, setErrors, setStatus}: FormikHelpers<ForgotPasswordFormInitialValuesType>) => {
    authForgotPasswordRequest(values).then((r) => {
      setStatus({
        info: t('INFO.RESET_PASSWORD_REQUEST_SEND'),
      });
    }).catch((e) => {
      setErrors({error: e.response.data.error});
    }).finally(() => setSubmitting(false));
  };

  return (
    <Formik
      initialValues={{email: ''}}
      onSubmit={onSubmit}
      validateOnChange={true}
    >
      {(formState) => (
        <BaseForm>
          <BaseHeaderForm title={t('TITLE.FORGOT_PASSWORD')} subtitle={t('TITLE.FORGOT_PASSWORD_SUBTITLE')}/>
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
          </div>
          <div className={'pt-3'}/>
          {
            formState.errors.error && <p className={'text-danger text-center pb-1'}>{formState.errors.error}</p>
          }

          {
            formState.status && <FormFeedback message={formState.status.info} type={'info'}/>
          }
          <div className={'pb-3'}/>
          <div className={'footer'}>
            <ButtonPrimary disabled={formState.isSubmitting} type={'submit'}>{t('RESET')}</ButtonPrimary>
          </div>
        </BaseForm>
      )}
    </Formik>
  );
};
