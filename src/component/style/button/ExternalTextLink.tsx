import React, {FC} from 'react';
import {ExternalTextLinkDefaultProps} from '@app/type/style/button/ExternalTextLinkDefaultProps';
import {ExternalLinkIcon} from '@app/component/icon/ExternalLinkIcon';

export const ExternalTextLinkDefault: FC<ExternalTextLinkDefaultProps> = (props: ExternalTextLinkDefaultProps) => {
  return <div className={'flex justify-center items-center'}>
    {
      props.beforeIcon && <i className={'mr-3'}>
        {props.beforeIcon}
      </i>
    }

    <a href={props.to} target={'_blank'} rel="nofollow noreferrer"
      className={`underline font-medium ease-out duration-300 ${props.extraClass}`}>
      {props.children}
    </a>

    {
      !props.hiddenExternalLink && <i className={'ml-3 opacity-50'}>
        <ExternalLinkIcon/>
      </i>
    }
  </div>;
};

export const PrimaryExternalTextLink: FC<ExternalTextLinkDefaultProps> = (props: ExternalTextLinkDefaultProps) => {
  return <ExternalTextLinkDefault extraClass={'hover:text-primary'} {...props} >{props.children}</ExternalTextLinkDefault>;
};
