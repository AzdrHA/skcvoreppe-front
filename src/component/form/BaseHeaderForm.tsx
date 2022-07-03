import React, {FC} from 'react';
import {BaseHeaderFormProps} from '@app/type/form/BaseHeaderFormProps';

export const BaseHeaderForm: FC<BaseHeaderFormProps> = (props: BaseHeaderFormProps) => {
  return <div className={'header'}>
    <div className={'title'}>
      {
        props.currentStep && props.maxStep && <span className={'float-right text-sm'}>{props.currentStep +'/'+ props.maxStep}</span>
      }
      <h1 className={'text-4xl font-semibold uppercase'}>{props.title}</h1>
    </div>
    <div className={'subtitle'}>
      {props.subtitle && <h2 className={'font-light'}>{props.subtitle}</h2>}
      <div className={'mb-8 w-full h-px bg-sky-blue-100'}/>
    </div>
  </div>;
};
