import React, {FC} from 'react';
import {FormLabel} from '@app/component/style/input/FormLabel';
import {FormInputText} from '@app/component/style/input/FormInputText';
import {FormInputFeedback} from '@app/component/style/input/FormInputFeedback';
import {useTranslation} from 'react-i18next';

type RegisterMajorFormProps = {
  register: any;
  formState: any;
}

export const RegisterMajorForm: FC<RegisterMajorFormProps> = (props: RegisterMajorFormProps) => {
  const {t} = useTranslation();

  return (
    <>
      <div className={'pt-6'}/>
      <div className={'flex'}>
        {/* LASTNAME*/}
        <div className={'form-group'}>
          <FormLabel htmlFor={'lastname'} required={true}>{t('LASTNAME')}</FormLabel>
          <FormInputText
            // icon={<EmailIcon/>}
            id={'lastname'}
            type={'text'}
            placeholder={'Jean'}
            required={true}
            register={{
              ...props.register('lastname', {
                required: t('THIS_FIELD_IS_REQUIRED'),
              }),
            }}
            extraClass={(props.formState.errors.lastname && '!border-warning !focus:border-warning')}
          />

          {
            props.formState.errors.lastname &&
              <FormInputFeedback type={'warning'}>{props.formState.errors.lastname.message}</FormInputFeedback>
          }
        </div>
        <div className={'mx-2'}/>

        {/* FIRSTNAME*/}
        <div className={'form-group'}>
          <FormLabel htmlFor={'firstname'} required={true}>{t('FIRSTNAME')}</FormLabel>
          <FormInputText
            // icon={<EmailIcon/>}
            id={'firstname'}
            type={'text'}
            placeholder={'Pierre'}
            required={true}
            register={{
              ...props.register('firstname', {
                required: t('THIS_FIELD_IS_REQUIRED'),
              }),
            }}
            extraClass={(props.formState.errors.firstname && '!border-warning !focus:border-warning')}
          />

          {
            props.formState.errors.firstname &&
              <FormInputFeedback type={'warning'}>{props.formState.errors.firstname.message}</FormInputFeedback>
          }
        </div>
      </div>
    </>
  );
};
