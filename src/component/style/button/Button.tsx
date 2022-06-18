import React, {FC} from 'react';
import {ButtonDefaultProps} from '@app/type/style/button/ButtonDefaultProps';

export const ButtonDefault: FC<ButtonDefaultProps> = (props: ButtonDefaultProps) => {
  return <button onClick={props.onClick} className={`p-5 ${props.extraClass} rounded w-full ease-out duration-300 py-3 px-4`}>{props.children}</button>;
};

export const ButtonPrimary: FC<ButtonDefaultProps> = (props: ButtonDefaultProps) => {
  return <ButtonDefault onClick={props.onClick} type={props.type} extraClass={'bg-primary hover:bg-primary-100 text-white text-sm'}>{props.children}</ButtonDefault>;
};
