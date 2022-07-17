import React, {FC, useState} from 'react';
import {ErrorMessage, Field} from 'formik';
import {FormLabel} from '@app/component/ui/input/FormLabel';
import {EyeCloseIcon} from '@app/component/icon/EyeCloseIcon';
import {EyeOpenIcon} from '@app/component/icon/EyeOpenIcon';
import {FormFeedback} from '@app/component/ui/input/FormFeedback';

export type FormFieldProps = {
  id: string;
  type: string;
  label: string;
  placeholder?: string | undefined;
  required?: boolean | undefined;
  icon?: JSX.Element | undefined;
  extraClass?: string | undefined;
  onClick?: any | undefined;
  error?: string | undefined;
}

export const FormField: FC<FormFieldProps> = (props: FormFieldProps) => {
  const [type, setType] = useState(props.type);
  return (
    <>
      <FormLabel htmlFor={props.id} required={props.required}>{props.label}</FormLabel>

      <div className={'inline-flex relative w-full'}>
        {
          props.icon && <div className={'absolute inset-y-0 left-0 w-8 flex items-center pl-1 pointer-events-none'}>
            {props.icon}
          </div>
        }
        <Field
          role={'presentation'}
          autoComplete="off"
          className={`ease-out duration-300 focus:outline-none focus:border-primary ${props.icon ? 'pl-9' : 'pl-3'} ${props.type === 'password' ? 'pr-8' : 'pr-3'} w-full text-sm border-solid border border-dark/50 rounded py-2 bg-sky-blue ${props.extraClass}`}
          id={props.id}
          name={props.id}
          type={type}
          placeholder={props.placeholder}
          // required={props.required}
        />
        {
          props.type === 'password' ?
            <button
              type={'button'}
              onClick={() => {
                setType(type === 'password' ? 'text' : 'password');
                props.onClick();
              }}
              className={'absolute inset-y-0 right-0 w-8 flex items-center pr-1'}>
              {
                type === 'password' ? <EyeCloseIcon/> : <EyeOpenIcon/>
              }
            </button> : null
        }
      </div>
      {
        props.error ? <FormFeedback message={props.error} type={'warning'}/> : <ErrorMessage
          name={props.id}
          component="small"
          className="text-xs block font-medium mt-1 text-warning"
        />
      }
    </>
  );
};
