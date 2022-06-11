import React, {FC} from 'react';
import {BaseFormProps} from '@app/type/form/BaseFormProps';

export const BaseForm: FC<BaseFormProps> = (props: BaseFormProps) => {
  return <form
    onSubmit={props.onSubmit}
    className={'max-w-[32rem] min-w-[32rem] shadow-[0_0px_10px_0px_rgba(0,0,0,0.25)] inline-block px-5 py-14 rounded bg-white sm:w-auto w-full sm:h-auto h-full sm:block flex flex-col justify-between'}
  >
    {props.children}
  </form>;
};
