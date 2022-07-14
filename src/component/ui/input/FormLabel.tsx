import React, {FC} from 'react';
import {FormLabelProps} from '@app/type/style/input/FormLabelProps';

export const FormLabel: FC<FormLabelProps> = (props: FormLabelProps) => {
  return (
    <label className={'block uppercase text-xs font-semibold pb-1'} htmlFor={props.htmlFor}>
      {
        props.required ? <>{props.children} <span className={'text-danger'}>*</span></> : <>{props.children}</>
      }
    </label>
  );
};
