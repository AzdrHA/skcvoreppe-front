import React, {useState} from 'react';
import {Formik, FormikHelpers} from 'formik';
import {BaseForm} from '@app/component/form/BaseForm';
import {useTranslation} from 'react-i18next';
import {BaseHeaderForm} from '@app/component/form/BaseHeaderForm';
import {FormField} from '@app/component/style/input/FormField';
import {AppConfig} from '@app/config/AppConfig';
import {FormFeedback} from '@app/component/style/input/FormFeedback';
import {MultiplePassword} from '@app/component/style/input/MultiplePassword';

interface RegisterFormValue {
  date: string;
  firstname: string;
  lastname: string;
  phoneNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const RegisterForm = () => {
  const {t} = useTranslation();
  const [isMajor, setMajor] = useState<'null' | 'child' | 'major'>('null');
  const typeTrans = isMajor === 'child' ? 'CHILD' : 'YOUR';
  const [step, setStep] = useState(1);
  const [maxStep, setMaxStep] = useState<number>(isMajor === 'child' ? 2 : 1);
  const [gender, setGender] = useState();

  return (
    <Formik
      initialValues={{
        date: '',
        firstname: '',
        lastname: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
      } as RegisterFormValue}
      validate={(values) => {
        const errors = {} as RegisterFormValue;
        for (const [key, value] of Object.entries(values)) {
          // @ts-ignore
          if (!values[key]) errors[key] = t('THIS_FIELD_IS_REQUIRED');
        }

        if (values.date) {
          const diff = Date.now() - new Date(values.date).getTime();
          const age = Math.abs(new Date(diff).getUTCFullYear() - 1970);
          const isMajor = age >= 18;
          if (age < AppConfig.year_min_start) {
            errors.date = t('AGE_OF_MEMBER_MUST_BE_GREATER_X_YEARS', {AGE: AppConfig.year_min_start});
          } else {
            setMajor(isMajor ? 'major' : 'child');
            setMaxStep(isMajor ? 1 : 2);
          }
        }

        return errors;
      }}
      onSubmit={(values: RegisterFormValue, {setSubmitting}: FormikHelpers<RegisterFormValue>) => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }}
    >
      {(formState) => (
        <BaseForm>
          <BaseHeaderForm currentStep={step} maxStep={maxStep} title={t('SIGN_UP')}
            subtitle={t('SIGN_UP_TO_CONTINUE')}/>

          <div className={'content'}>
            <FormField
              required={true}
              label={isMajor === 'null' ? t('DATE_OF_BIRT_OF_MEMBER') : t(`${typeTrans}_DATE_OF_BIRTH`)}
              id={'date'}
              type={'date'}
              extraClass={formState.errors.date && '!border-warning !focus:border-warning'}
              error={formState.errors.date}
            />
            {
              isMajor === 'null' && !formState.errors.date &&
                <FormFeedback message={t('ENTER_A_DATE_OF_BIRTH_TO_START')} type={'info'}/>
            }

            <div className={'pt-6'}/>

            <div className="flex">
              <div className="form-group">
                <FormField
                  required={true}
                  label={t(`${typeTrans}_LASTNAME`)}
                  id={'lastname'}
                  type={'text'}
                  extraClass={formState.errors.lastname && '!border-warning !focus:border-warning'}
                  error={formState.errors.lastname}
                  placeholder={'Freeman'}
                />
              </div>
              <div className={'mx-2'}/>
              <div className="form-group">
                <FormField
                  required={true}
                  label={t(`${typeTrans}_FIRSTNAME`)}
                  id={'firstname'}
                  type={'text'}
                  extraClass={formState.errors.firstname && '!border-warning !focus:border-warning'}
                  error={formState.errors.firstname}
                  placeholder={'Morgane'}
                />
              </div>
            </div>

            <div className={'pt-6'}/>

            <div className="flex">
              <div className="form-group">
                <FormField
                  required={true}
                  label={t(`${typeTrans}_PHONE_NUMBER`)}
                  id={'phoneNumber'}
                  type={'text'}
                  extraClass={formState.errors.phoneNumber && '!border-warning !focus:border-warning'}
                  error={formState.errors.phoneNumber}
                  placeholder={'3630'}
                />
              </div>
              <div className={'mx-2'}/>
              <div className="form-group">
                <FormField
                  required={true}
                  label={t(`${typeTrans}_EMAIL`)}
                  id={'email'}
                  type={'email'}
                  extraClass={formState.errors.email && '!border-warning !focus:border-warning'}
                  error={formState.errors.email}
                  placeholder={'morgane@freeman.fr'}
                />
              </div>
            </div>

            <div className={'pt-6'}/>

            <div className={'flex'}>
              <MultiplePassword passwordError={formState.errors.password} confirmPasswordError={formState.errors.confirmPassword}/>
            </div>
          </div>
        </BaseForm>
      )}
    </Formik>
  );
};
