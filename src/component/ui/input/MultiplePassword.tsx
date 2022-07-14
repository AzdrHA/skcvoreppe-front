import React, {FC, useState} from 'react';
import {Field} from 'formik';
import {EyeCloseIcon} from '@app/component/icon/EyeCloseIcon';
import {EyeOpenIcon} from '@app/component/icon/EyeOpenIcon';
import {LockIcon} from '@app/component/icon/LockIcon';
import {FormFeedback} from '@app/component/ui/input/FormFeedback';

export type MultiplePasswordProps = {
  passwordError?: string | undefined;
  confirmPasswordError?: string | undefined;
}

export const MultiplePassword: FC<MultiplePasswordProps> = (props: MultiplePasswordProps) => {
  const [type, setType] = useState('password');
  return (
    <>
      <div className={'form-group'}>
        <div className="relative">
          <div className={'absolute inset-y-0 left-0 w-8 flex items-center pl-1 pointer-events-none'}><LockIcon/></div>
          <Field
            role={'presentation'}
            autoComplete="off"
            className={`ease-out duration-300 focus:outline-none focus:border-primary pl-9 pr-8' w-full text-sm border-solid border border-dark/50 rounded py-2 bg-sky-blue`}
            id={'password'}
            name={'password'}
            type={type}
            required={true}
          />
          <button
            type={'button'}
            onClick={() => setType(type === 'password' ? 'text' : 'password')}
            className={'absolute inset-y-0 right-0 w-8 flex items-center pr-1'}>
            {
              type === 'password' ? <EyeCloseIcon/> : <EyeOpenIcon/>
            }
          </button>
        </div>
        {props.passwordError && <FormFeedback message={props.passwordError} type={'warning'}/>}
      </div>
      <div className={'mx-2'}/>
      <div className={'form-group'}>
        <div className={'relative'}>
          <div className={'absolute inset-y-0 left-0 w-8 flex items-center pl-1 pointer-events-none'}><LockIcon/></div>
          <Field
            role={'presentation'}
            autoComplete="off"
            className={`ease-out duration-300 focus:outline-none focus:border-primary pl-9 pr-8' w-full text-sm border-solid border border-dark/50 rounded py-2 bg-sky-blue`}
            id={'confirmPassword'}
            name={'confirmPassword'}
            type={type}
            required={true}
          />
          <button
            type={'button'}
            onClick={() => setType(type === 'password' ? 'text' : 'password')}
            className={'absolute inset-y-0 right-0 w-8 flex items-center pr-1'}>
            {
              type === 'password' ? <EyeCloseIcon/> : <EyeOpenIcon/>
            }
          </button>
        </div>
        {props.confirmPasswordError && <FormFeedback message={props.confirmPasswordError} type={'warning'}/>}
      </div>
    </>
  );
};
