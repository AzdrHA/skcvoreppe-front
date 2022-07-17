import {FormField} from '@app/component/ui/input/FormField';
import {EmailIcon} from '@app/component/icon/EmailIcon';
import {TicksIcon} from '@app/component/icon/TicksIcon';
import {hasLowercase, hasNumber, hasUppercase, isLongEnough} from '@app/utils/miscellaneous';
import React, {FC, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {FormikValues} from 'formik';

export type PasswordValidationProps = {
  values: FormikValues,
  errors: any
  parentCheckPassword?: Function | undefined
}
export const PasswordValidation: FC<PasswordValidationProps> = ({values, errors, parentCheckPassword}: PasswordValidationProps) => {
  const {t} = useTranslation(['form']);
  const minCharacter = 8;
  const minLowerCase = 1;
  const minUpperCase = 1;
  const minNumber = 1;

  useEffect(() => {
    if (
      parentCheckPassword
    ) {
      parentCheckPassword(parentCheckPassword &&
        isLongEnough(values.password, minCharacter) &&
        hasLowercase(values.password, minLowerCase) &&
        hasUppercase(values.password, minUpperCase) &&
        hasNumber(values.password, minNumber));
    }
  }, [values.password]);

  return (
    <>
      <div className="form-group">
        <FormField
          icon={<EmailIcon/>}
          id={'password'}
          type={'password'}
          required={true}
          label={t('NEW_PASSWORD')}
          placeholder={t('PLACEHOLDER.PASSWORD')}
          extraClass={errors.password && '!border-warning !focus:border-warning'}
          error={errors.password}
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
          extraClass={errors.confirmPassword && '!border-warning !focus:border-warning'}
          error={errors.confirmPassword}
        />
      </div>

      <div className={'pt-6'}>
        <p>{t('PASSWORD_SECURE_INFO')}</p>
        <div className={'grid grid-cols-2 gap-2 mt-2'}>
          <div className={'flex mr-auto'}>
            <TicksIcon extraClass={'mr-2 !text-primary'}/>
            <span className={
              'text-sm block ' + (isLongEnough(values.password, minCharacter) ? 'text-primary': '')
            }>{t('MIN_X_CHARACTER', {count: minCharacter})}</span>
          </div>

          <div className={'flex ml-auto'}>
            <TicksIcon extraClass={'mr-2'}/>
            <span className={
              'text-sm block ' + (hasLowercase(values.password, minLowerCase) ? 'text-primary': '')
            }>{t('MIN_X_LOWERCASE', {count: minLowerCase})}</span>
          </div>

          <div className={'flex mr-auto'}>
            <TicksIcon extraClass={'mr-2'}/>
            <span className={
              'text-sm block ' + (hasUppercase(values.password, minUpperCase) ? 'text-primary': '')
            }>{t('MIN_X_UPPERCASE', {count: minUpperCase})}</span>
          </div>

          <div className={'flex ml-auto'}>
            <TicksIcon extraClass={'mr-2'}/>
            <span className={
              'text-sm block ' + (hasNumber(values.password, minNumber) ? 'text-primary': '')
            }>{t('MIN_X_NUMBER', {count: minNumber})}</span>
          </div>
        </div>
      </div>
    </>
  );
};
