import React, {FC} from 'react';
import {FormInputFeedbackProps} from '@app/type/style/input/FormInputFeedbackProps';


export const FormInputFeedback: FC<FormInputFeedbackProps> = (props: FormInputFeedbackProps) => {
  const style: any = {
    global: 'text-xs block font-medium mt-1',
    warning: 'text-warning',
    error: 'text-danger',
    success: 'text-success',
    info: 'text-info',
  };

  return (
    <span className={`${style.global} ${style[props.type]}`}>{props.children}</span>
  );
};
