import {BaseForm} from '@app/component/form/BaseForm';
import {BaseHeaderForm} from '@app/component/form/BaseHeaderForm';
import React, {useEffect, useState} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {FormLabel} from '@app/component/style/input/FormLabel';
import {FormInputText} from '@app/component/style/input/FormInputText';
import {FormInputFeedback} from '@app/component/style/input/FormInputFeedback';
import {LockIcon} from '@app/component/icon/LockIcon';
import {AppConfig} from '@app/config/AppConfig';
import {ButtonPrimary} from '@app/component/style/button/Button';

export type RegisterFormData = {
  firstname: string;
  lastname: string;
  phoneNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
  date: string;
}

export const RegisterForm = () => {
  const {register, formState, handleSubmit, setError, clearErrors, errors} = useForm<RegisterFormData>();
  const {t} = useTranslation();
  const [isMajor, setMajor] = useState<'null'|'child'|'major'>('null');
  const typeTrans = isMajor === 'child' ? 'CHILD' : 'YOUR';
  const [step, setStep] = useState(1);
  const [maxStep, setMaxStep] = useState<number>(isMajor === 'child' ? 2 : 1);
  const [gender, setGender] = useState();

  useState(() => {
    console.log('cc');
  }, []);

  const onSubmit: SubmitHandler<RegisterFormData> = (data) => {
    console.log(data);
  };

  return (
    <BaseForm onSubmit={handleSubmit(onSubmit)}>
      <BaseHeaderForm currentStep={step} maxStep={maxStep} title={t('SIGN_UP')} subtitle={t('SIGN_UP_TO_CONTINUE')}/>

      <div className={'content'}>
        {/* DATE OF BIRTHDAY */}
        <div className={'form-group'}>
          <FormLabel htmlFor={'date'} required={true}>{
            isMajor === 'null' ? t('DATE_OF_BIRT_OF_MEMBER') : t(`${typeTrans}_DATE_OF_BIRTH`)
          }</FormLabel>

          <FormInputText
            id={'date'}
            type={'date'}
            required={true}
            register={{...register('date', {
              required: t('THIS_FIELD_IS_REQUIRED'),
              onChange: async (e) => {
                const diff = Date.now() - new Date(e.target.value).getTime();
                const age = Math.abs(new Date(diff).getUTCFullYear() - 1970);
                const isMajor = age >= 18;
                if (age < AppConfig.year_min_start) {
                  await clearErrors('date');
                  await setError('date', {
                    type: 'uwu',
                    message: t('AGE_OF_MEMBER_MUST_BE_GREATER_X_YEARS', {AGE: AppConfig.year_min_start}),
                  });
                } else {
                  clearErrors('date');
                  setMajor(isMajor ? 'major' : 'child');
                  setMaxStep(isMajor ? 1 : 2);
                }
              },
            })}}
            extraClass={(formState.errors.date && '!border-warning !focus:border-warning')}
          />
          {
            isMajor === 'null' && !formState.errors.date && <FormInputFeedback type={'info'}>{t('ENTER_A_DATE_OF_BIRTH_TO_START')}</FormInputFeedback>
          }
          {
            formState.errors.date &&
              <FormInputFeedback type={'warning'}>{formState.errors.date.message}</FormInputFeedback>
          }
        </div>

        {/* {
          isMajor !== 'null' ?
            <>
              <div className={'pt-6'}/>
              <div className={'flex'}>
                 LASTNAME
                <div className={'form-group'}>
                  <FormLabel htmlFor={'lastname'} required={true}>{t(`${typeTrans}_LASTNAME`)}</FormLabel>
                  <FormInputText
                    // icon={<EmailIcon/>}
                    id={'lastname'}
                    type={'text'}
                    placeholder={'Jean'}
                    required={true}
                    register={{
                      ...register('lastname', {
                        required: t('THIS_FIELD_IS_REQUIRED'),
                      }),
                    }}
                    extraClass={(formState.errors.lastname && '!border-warning !focus:border-warning')}
                  />

                  {
                    formState.errors.lastname &&
                    <FormInputFeedback type={'warning'}>{formState.errors.lastname.message}</FormInputFeedback>
                  }
                </div>
                <div className={'mx-2'}/>

                 FIRSTNAME
                <div className={'form-group'}>
                  <FormLabel htmlFor={'firstname'} required={true}>{t(`${typeTrans}_FIRSTNAME`)}</FormLabel>
                  <FormInputText
                    // icon={<EmailIcon/>}
                    id={'firstname'}
                    type={'text'}
                    placeholder={'Pierre'}
                    required={true}
                    register={{
                      ...register('firstname', {
                        required: t('THIS_FIELD_IS_REQUIRED'),
                      }),
                    }}
                    extraClass={(formState.errors.firstname && '!border-warning !focus:border-warning')}
                  />

                  {
                    formState.errors.firstname &&
                      <FormInputFeedback type={'warning'}>{formState.errors.firstname.message}</FormInputFeedback>
                  }
                </div>
              </div>

              <div className={'pt-6'}/>
               PHONE NUMBER
              <div className={'form-group'}>
                <FormLabel htmlFor={'phoneNumber'} required={isMajor === 'major'}>{t(`${typeTrans}_PHONE_NUMBER`)}</FormLabel>
                <FormInputText
                  icon={<CallPhone/>}
                  id={'phoneNumber'}
                  type={'text'}
                  placeholder={'0666666666'}
                  required={isMajor === 'major'}
                  register={{
                    ...register('phoneNumber', {
                      required: t('THIS_FIELD_IS_REQUIRED'),
                    }),
                  }}
                  extraClass={(formState.errors.phoneNumber && '!border-warning !focus:border-warning')}
                />
                {
                  formState.errors.phoneNumber &&
                    <FormInputFeedback type={'warning'}>{formState.errors.phoneNumber.message}</FormInputFeedback>
                }
              </div>

              <div className={'pt-6'}/>
               EMAIL
              <div className={'form-group'}>
                <FormLabel htmlFor={'email'} required={isMajor === 'major'}>{t(`${typeTrans}_EMAIL`)}</FormLabel>
                <FormInputText
                  icon={<EmailIcon/>}
                  id={'email'}
                  type={'email'}
                  placeholder={'exemple@exemple.com'}
                  required={isMajor === 'major'}
                  register={{
                    ...register('email', {
                      required: t('THIS_FIELD_IS_REQUIRED'),
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: t('ENTER_A_VALID_EMAIL'),
                      },
                    }),
                  }}
                  extraClass={(formState.errors.email && '!border-warning !focus:border-warning')}
                />

                {
                  formState.errors.email &&
                    <FormInputFeedback type={'warning'}>{formState.errors.email.message}</FormInputFeedback>
                }
              </div>

              <div className={'pt-6'}/>
              <div className={'flex'}>
                 PASSWORD
                <div className={'form-group'}>
                  <FormLabel htmlFor={'password'} required={true}>{t('REGISTER_PASSWORD')}</FormLabel>
                  <FormInputText
                    icon={<LockIcon/>}
                    id={'password'}
                    type={'password'}
                    placeholder={'•••••••••••••••••••••'}
                    required={true}
                    register={{...register('password', {required: t('THIS_FIELD_IS_REQUIRED')})}}
                    extraClass={(formState.errors.password && '!border-warning !focus:border-warning')}
                  />

                  {
                    formState.errors.password &&
                      <FormInputFeedback type={'warning'}>{formState.errors.password.message}</FormInputFeedback>
                  }
                </div>

                <div className={'mx-2'}/>
                 CONFIRM PASSWORD
                <div className={'form-group'}>
                  <FormLabel htmlFor={'confirmPassword'} required={true}>{t('REGISTER_CONFIRM_PASSWORD')}</FormLabel>
                  <FormInputText
                    icon={<LockIcon/>}
                    id={'confirmPassword'}
                    type={'password'}
                    placeholder={'•••••••••••••••••••••'}
                    required={true}
                    register={{...register('confirmPassword', {required: t('THIS_FIELD_IS_REQUIRED')})}}
                    extraClass={(formState.errors.confirmPassword && '!border-warning !focus:border-warning')}
                  />

                  {
                    formState.errors.confirmPassword &&
                      <FormInputFeedback type={'warning'}>{formState.errors.confirmPassword.message}</FormInputFeedback>
                  }
                </div>
              </div>
            </> : null
        }*/}

        <div className={'pt-6'}/>
        <ButtonPrimary disabled={Boolean(Object.keys(formState.errors).length)} type={'button'} extraClass={'!w-auto float-right'}>S'inscrire</ButtonPrimary>

        {/* {
          isMajor === 'child' && step === 1 ? <>
            <div className={'pt-6'}/>
            <ButtonPrimary type={'button'} extraClass={'!w-auto float-right'}>Parti responsable légal</ButtonPrimary>
          </> : null
        }
*/}
      </div>
    </BaseForm>
  );
};
