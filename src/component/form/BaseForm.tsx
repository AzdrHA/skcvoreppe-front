import React, {FC} from 'react';
import {BaseFormProps} from '@app/type/form/BaseFormProps';
import {Form} from 'formik';

export const BaseForm: FC<BaseFormProps> = (props: BaseFormProps) => {
  return <Form
    className={'sm:max-w-[32rem] sm:min-w-[32rem] shadow-[0_0px_10px_0px_rgba(0,0,0,0.25)] inline-block px-5 py-14 rounded bg-white sm:w-auto w-full sm:h-auto h-full sm:block flex flex-col justify-between'}
  >
    {props.children}
  </Form>;
};
