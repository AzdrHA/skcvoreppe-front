import React, {FC} from 'react';
import {ButtonDefaultProps} from '@app/type/style/button/ButtonDefaultProps';

export const ButtonDefault: FC<ButtonDefaultProps> = (props: ButtonDefaultProps) => {
  return <button type={props.type} disabled={props.disabled} onClick={props.onClick} className={`p-5 font-medium disabled:cursor-not-allowed disabled:opacity-50 rounded w-full ease-out duration-300 py-3 px-4 ${props.extraClass}`}>{props.children}</button>;
};

export const ButtonPrimary: FC<ButtonDefaultProps> = (props: ButtonDefaultProps) => {
  return <ButtonDefault disabled={props.disabled} onClick={props.onClick} type={props.type} extraClass={`bg-primary hover:bg-primary-100 text-white text-sm ${props.extraClass}`}>{props.children}</ButtonDefault>;
};
