import React, {FC} from 'react';
import {IconProps} from '@components/types/IconProps';

export const CallPhone: FC<IconProps> = (props: IconProps) => {
  return (
    <svg className={'small-icon-svg'.concat(' ', props.extraClass ?? '')} xmlns="http://www.w3.org/2000/svg" height="18" width="18">
      <path fill="currentColor" fillRule="evenodd" clipRule="evenodd"
        d="M3.6 7.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6a.94.94 0 0 1 1 1V17a.94.94 0 0 1-1 1A16.99 16.99 0 0 1 0 1a.94.94 0 0 1 1-1h3.5a.94.94 0 0 1 1 1c0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1L3.6 7.8h0z"
      />
    </svg>
  );
};
