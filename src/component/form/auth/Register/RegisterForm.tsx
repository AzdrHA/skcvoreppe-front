import React, {useState} from 'react';
import {Formik, FormikHelpers} from 'formik';
import {BaseForm} from '@app/component/form/BaseForm';
import {useTranslation} from 'react-i18next';
import {BaseHeaderForm} from '@app/component/form/BaseHeaderForm';
import {FormField} from '@app/component/ui/input/FormField';
import {AppConfig} from '@app/config/AppConfig';
import {FormFeedback} from '@app/component/ui/input/FormFeedback';
import {ButtonPrimary} from '@app/component/ui/button/Button';
import {PasswordValidation} from '@app/component/ui/PasswordValidation';
import * as Yup from 'yup';
import {authRegisterRequest} from '@app/api/authRequest';
import {useNavigate} from 'react-router-dom';
import {routes} from '@app/config/routes';

export interface RegisterFormValue {
  dateOfBirth: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
  error?: string | undefined;
  passwordValidation?: string | undefined;
}

export const RegisterForm = () => {
  const {t} = useTranslation(['form']);
  const navigate = useNavigate();
  const [isSecure, setSecure] = useState(false);
  const [isAgeValid, setAgeValid] = useState(false);
  const [isAgeValidated, setAgeValidated] = useState(false);
  const [gender, setGender] = useState();
  const REDIRECT_TIME = 3;

  const checkPassword = (isValid: boolean) => {
    if (isSecure !== isValid) {
      setSecure(isValid);
    }
  };

  return (
    <Formik
      initialValues={{
        dateOfBirth: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
      } as RegisterFormValue}
      validationSchema={
        Yup.object().shape({
          dateOfBirth: Yup.string().required(t('WARNING.THIS_FIELD_IS_REQUIRED')),
          firstName: Yup.string().required(t('WARNING.THIS_FIELD_IS_REQUIRED')),
          lastName: Yup.string().required(t('WARNING.THIS_FIELD_IS_REQUIRED')),
          email: Yup.string().required(t('WARNING.THIS_FIELD_IS_REQUIRED')).email('WARNING.ENTER_A_VALID_EMAIL'),
          phone: Yup.string().required(t('WARNING.THIS_FIELD_IS_REQUIRED')),
          password: Yup.string()
              .required(t('WARNING.THIS_FIELD_IS_REQUIRED')),
          confirmPassword: Yup.string().required(t('WARNING.THIS_FIELD_IS_REQUIRED'))
              .oneOf([Yup.ref('password'), null], t('WARNING.CONFIRM_PASSWORD_NOT_MATCH')),
        })
      }
      validate={(values) => {
        const errors = {} as RegisterFormValue;

        if (values.dateOfBirth) {
          const diff = Date.now() - new Date(values.dateOfBirth).getTime();
          const age = Math.abs(new Date(diff).getUTCFullYear() - 1970);
          if (age < AppConfig.year_min_start) {
            errors.dateOfBirth = t('AGE_OF_MEMBER_MUST_BE_GREATER_X_YEARS', {AGE: AppConfig.year_min_start});
          } else {
            setAgeValid(true);
          }
        }

        return errors;
      }}
      onSubmit={async (values: RegisterFormValue, {setSubmitting, setStatus}: FormikHelpers<RegisterFormValue>) => {
        await authRegisterRequest(values);
        // setSubmitting(false);
      }}
    >
      {(formState) => (
        <BaseForm>
          {
            !true ? <>
              <BaseHeaderForm title={t('TITLE.SIGN_UP')}
                subtitle={t('TITLE.SIGN_UP_TO_CONTINUE')}/>

              <div className="content">

                <FormField
                  required={true}
                  label={isAgeValid ? t('YOUR_DATE_OF_BIRTH') : t(`DATE_OF_BIRT_OF_MEMBER`)}
                  id={'dateOfBirth'}
                  type={'date'}
                  extraClass={formState.errors.dateOfBirth && '!border-warning !focus:border-warning'}
                  error={formState.errors.dateOfBirth}
                />

                {
                  !isAgeValid && !formState.errors.dateOfBirth &&
                      <FormFeedback message={t('ENTER_A_DATE_OF_BIRTH_TO_START')} type={'info'}/>
                }

                <div className={'py-3'}/>

                <div className="flex">
                  <div className="form-group">
                    <FormField
                      required={true}
                      label={t(`YOUR_LASTNAME`)}
                      id={'lastName'}
                      type={'text'}
                      extraClass={formState.errors.lastName && '!border-warning !focus:border-warning'}
                      placeholder={t(`PLACEHOLDER.LASTNAME`)}
                      error={formState.errors.lastName}
                    />
                  </div>
                  <div className={'mx-2'}/>
                  <div className="form-group">
                    <FormField
                      required={true}
                      label={t(`YOUR_FIRSTNAME`)}
                      id={'firstName'}
                      type={'text'}
                      extraClass={formState.errors.firstName && '!border-warning !focus:border-warning'}
                      placeholder={t('PLACEHOLDER.FIRSTNAME')}
                      error={formState.errors.firstName}
                    />
                  </div>
                </div>

                <div className={'py-3'}/>

                <div className="flex">
                  <div className="form-group">
                    <FormField
                      required={true}
                      label={t(`YOUR_PHONE_NUMBER`)}
                      id={'phone'}
                      type={'tel'}
                      extraClass={formState.errors.phone && '!border-warning !focus:border-warning'}
                      placeholder={t(`PLACEHOLDER.PHONE_NUMBER`)}
                      error={formState.errors.phone}
                    />
                  </div>
                  <div className={'mx-2'}/>
                  <div className="form-group">
                    <FormField
                      required={true}
                      label={t(`YOUR_EMAIL`)}
                      id={'email'}
                      type={'email'}
                      extraClass={formState.errors.email && '!border-warning !focus:border-warning'}
                      placeholder={t('PLACEHOLDER.EMAIL')}
                      error={formState.errors.email}
                    />
                  </div>
                </div>

                <div className={'py-3'}/>
                <PasswordValidation errors={formState.errors} parentCheckPassword={checkPassword}
                  values={formState.values}/>
              </div>

              <div className={'py-3'}/>

              <div className="footer">
                <ButtonPrimary disabled={!isSecure || Object.keys(formState.errors).length as unknown as boolean}
                  type={'submit'}>{t('SIGN_IN')}</ButtonPrimary>
              </div>
            </> :
            <div className={'text-center'}>
              <h1 className={'font-bold text-2xl'}>{t('INFO.VERIFY_YOUR_EMAIL')}</h1>
              <p className={'mt-3 text-sm'}>You will nee to verify your email to complete registration</p>
              <ButtonPrimary extraClass={'mt-3'}>Renvoyer l'email</ButtonPrimary>
            </div>
          }
        </BaseForm>
      )}
    </Formik>
  );
};
