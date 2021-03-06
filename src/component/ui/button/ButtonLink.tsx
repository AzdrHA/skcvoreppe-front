import {Link} from 'react-router-dom';
import React, {FC} from 'react';
import {ButtonLinkProps} from '@app/type/style/button/ButtonLinkProps';

export const ButtonLink: FC<ButtonLinkProps> = (props: ButtonLinkProps) => {
  const style = 'block w-full text-center inline-block ease-out duration-300 py-2 px-4 bg-primary hover:bg-primary-100 text-white rounded text-sm';
  return (
    <Link
      className={props.extraClass ? style.concat(' ', props.extraClass) : style}
      to={props.to}>{props.children}</Link>
  );
};
