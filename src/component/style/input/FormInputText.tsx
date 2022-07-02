import React, {FC, useState} from 'react';
import {EyeCloseIcon} from '@app/component/icon/EyeCloseIcon';
import {EyeOpenIcon} from '@app/component/icon/EyeOpenIcon';
import {FormInputTextProps} from '@app/type/style/input/FormInputTextProps';

export const FormInputText: FC<FormInputTextProps> = (props: FormInputTextProps) => {
  const [type, setType] = useState(props.type);

  return (
    <div className={'inline-flex relative w-full'}>
      {
        props.icon && <div className={'absolute inset-y-0 left-0 w-8 flex items-center pl-1 pointer-events-none'}>
          {props.icon}
        </div>
      }
      <input
        role={'presentation'}
        autoComplete="off"
        className={`ease-out duration-300 focus:outline-none focus:border-primary pl-10 ${props.type === 'password' ? 'pr-8' : 'pr-1'} w-full text-sm border-solid border border-dark/50 rounded py-2 bg-sky-blue ${props.extraClass}`}
        id={props.id}
        type={type}
        placeholder={props.placeholder}
        {...props.register}
      />
      {
        props.type === 'password' ?
          <button
            type={'button'}
            onClick={() => setType(type === 'password' ? 'text' : 'password')}
            className={'absolute inset-y-0 right-0 w-8 flex items-center pr-1'}>
            {
              type === 'password' ? <EyeCloseIcon/> : <EyeOpenIcon/>
            }
          </button> : null
      }
    </div>
  );
};
