import React, {FC} from 'react';
import {Link} from 'react-router-dom';
import {TextLinkDefaultProps} from '@app/type/style/button/TextLinkDefaultProps';

export const TextLinkDefault: FC<TextLinkDefaultProps> = (props: TextLinkDefaultProps) => {
  return <Link className={`underline font-medium ease-out duration-300 ${props.extraClass}`} to={props.to}>
    {props.children}
  </Link>;
};

export const TextLinkPrimary: FC<TextLinkDefaultProps> = (props: TextLinkDefaultProps) => {
  return <TextLinkDefault to={props.to} extraClass={'hover:text-primary'}>{props.children}</TextLinkDefault>;
};
