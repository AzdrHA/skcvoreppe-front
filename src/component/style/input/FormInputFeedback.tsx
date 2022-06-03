import React, {FC} from 'react';
import {FormInputFeedbackProps} from '@app/type/style/input/FormInputFeedbackProps';


export const FormInputFeedback: FC<FormInputFeedbackProps> = (props: FormInputFeedbackProps) => {
  const globalStyle = 'text-xs block font-medium mt-1';
  const warningStyle = `${globalStyle} text-warning`;
  const errorStyle = `${globalStyle} text-danger`;
  const successStyle = `${globalStyle} text-success`;

  return (
    <span className={props.type === 'success' ? successStyle : props.type === 'danger' ? errorStyle : warningStyle}>{props.children}</span>
  );
};
