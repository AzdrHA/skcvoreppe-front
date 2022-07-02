import {BaseForm} from '@app/component/form/BaseForm';
import {BaseHeaderForm} from '@app/component/form/BaseHeaderForm';
import React, {useState} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {FormLabel} from '@app/component/style/input/FormLabel';
import {FormInputText} from '@app/component/style/input/FormInputText';
import {FormInputFeedback} from '@app/component/style/input/FormInputFeedback';
import {LockIcon} from '@app/component/icon/LockIcon';
import {AppConfig} from '@app/config/AppConfig';
import {EmailIcon} from '@app/component/icon/EmailIcon';
import {CallPhone} from '@app/component/icon/CallPhone';
import {Select} from '@app/component/style/Select';

export enum GenderEnum {
  female = 'Femme',
  male = 'Homme',
  non_binary = 'Non-binaire',
  transgender = 'Transgenres',
  intersex = 'Intersexe',
  let_me_type = 'Laissez-moi taper',
  not_saying = 'Je préfère ne pas le dire'
}

export type RegisterFormData = {
  firstname: string;
  lastname: string;
  phoneNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
  gender: GenderEnum;
  date: string;
}

export const RegisterForm = () => {
  const {register, formState, handleSubmit, setError, clearErrors} = useForm<RegisterFormData>();
  const {t} = useTranslation();
  const [isMajor, setMajor] = useState<'null'|'child'|'major'>('null');

  const onSubmit: SubmitHandler<RegisterFormData> = (data) => {
  };

  const DateOfBirthEventOnChange = (e: any) => {
    const diff = Date.now() - new Date(e.target.value).getTime();
    const age = Math.abs(new Date(diff).getUTCFullYear() - 1970);
    const isMajor = age >= 18;
    console.log(isMajor);
    if (age < AppConfig.year_min_start) {
      setError('date', {type: 'error', message: t('AGE_OF_MEMBER_MUST_BE_GREATER_X_YEARS', {AGE: AppConfig.year_min_start})});
    } else {
      clearErrors('date');
      setMajor(isMajor ? 'major' : 'child');
    }
  };

  return (
    <BaseForm onSubmit={handleSubmit(onSubmit)}>
      <BaseHeaderForm title={t('SIGN_UP')} subtitle={t('SIGN_UP_TO_CONTINUE')}/>

      <div className={'content'}>
        {/* DATE OF BIRTHDAY */}
        <div className={'form-group'}>
          <FormLabel htmlFor={'date'} required={true}>{
            isMajor === 'null' ? t('DATE_OF_BIRT_OF_MEMBER') : isMajor === 'major' ? t('YOUR_DATE_OF_BIRTH') : t('DATE_OF_BIRTH_OF_CHILD')
          }</FormLabel>
          <FormInputText
            icon={<LockIcon/>}
            id={'date'}
            type={'date'}
            required={true}
            register={{
              ...register('date', {
                required: t('THIS_FIELD_IS_REQUIRED'),
                onChange: DateOfBirthEventOnChange,
              }),
            }}
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

        {
          isMajor === 'null' ?
            <>
              <div className={'pt-6'}/>
              <div className={'flex'}>
                {/* LASTNAME */}
                <div className={'form-group'}>
                  <FormLabel htmlFor={'lastname'} required={true}>{t('LASTNAME')}</FormLabel>
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

                {/* FIRSTNAME */}
                <div className={'form-group'}>
                  <FormLabel htmlFor={'firstname'} required={true}>{t('FIRSTNAME')}</FormLabel>
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
              {/* PHONE NUMBER */}
              <div className={'form-group'}>
                <FormLabel htmlFor={'phoneNumber'} required={true}>{t('PHONE_NUMBER')}</FormLabel>
                <FormInputText
                  icon={<CallPhone/>}
                  id={'phoneNumber'}
                  type={'text'}
                  placeholder={'0666666666'}
                  required={true}
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
              {/* EMAIL */}
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
                  extraClass={(formState.errors.email && '!border-warning !focus:border-warning')}
                />

                {
                  formState.errors.email &&
                    <FormInputFeedback type={'warning'}>{formState.errors.email.message}</FormInputFeedback>
                }
              </div>

              <div className={'pt-6'}/>
              <div className={'flex'}>
                {/* PASSWORD*/}
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
                {/* CONFIRM PASSWORD*/}
                <div className={'form-group'}>
                  <FormLabel htmlFor={'confirmPassword'} required={true}>{t('REGISTER_CONFIRM_PASSWORD')}</FormLabel>
                  <FormInputText
                    icon={<LockIcon/>}
                    id={'confirmPassword'}
                    type={'password'}
                    placeholder={'•••••••••••••••••••••'}
                    required={true}
                    register={{...register('password', {required: t('THIS_FIELD_IS_REQUIRED')})}}
                    extraClass={(formState.errors.confirmPassword && '!border-warning !focus:border-warning')}
                  />

                  {
                    formState.errors.confirmPassword &&
                      <FormInputFeedback type={'warning'}>{formState.errors.confirmPassword.message}</FormInputFeedback>
                  }
                </div>
              </div>

              <div className={'pt-6'}/>
              {/* GENDER */}
              <div className={'form-group'}>
                <FormLabel htmlFor={'gender'} required={true}>{t('YOUR_GENDER')}</FormLabel>
                <Select options={[
                  {value: 'chocolate', label: GenderEnum.female},
                  {value: 'chocolate', label: GenderEnum.male},
                  {value: 'chocolate', label: GenderEnum.non_binary},
                  {value: 'chocolate', label: GenderEnum.transgender},
                  {value: 'chocolate', label: GenderEnum.intersex},
                  {value: 'chocolate', label: GenderEnum.let_me_type},
                  {value: 'chocolate', label: GenderEnum.not_saying},
                ]} />
                {
                  formState.errors.gender &&
                    <FormInputFeedback type={'warning'}>{formState.errors.gender.message}</FormInputFeedback>
                }
              </div>
            </> : null
        }
      </div>
    </BaseForm>
  );
};
