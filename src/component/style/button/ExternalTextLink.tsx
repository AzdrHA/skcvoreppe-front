import React, {FC} from 'react';
import {ExternalTextLinkDefaultProps} from '@app/type/style/button/ExternalTextLinkDefaultProps';
import {ExternalLinkIcon} from '@app/component/icon/ExternalLinkIcon';

export const ExternalTextLinkDefault: FC<ExternalTextLinkDefaultProps> = (props: ExternalTextLinkDefaultProps) => {
  return <div>
    <a href={props.to} target={'_blank'} rel="nofollow noreferrer" className={`underline font-medium ease-out duration-300 ${props.extraClass}`}>
      {props.children}
    </a>;
    <i>
      <ExternalLinkIcon/>
    </i>
  </div>;
};
