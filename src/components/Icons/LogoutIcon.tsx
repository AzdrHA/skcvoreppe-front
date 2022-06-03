import React, {FC} from 'react';
import {IconProps} from '@components/types/IconProps';

export const LogoutIcon: FC<IconProps> = (props: IconProps) => {
  return (
    <svg className={'small-icon-svg'.concat(' ', props.extraClass ?? '')} xmlns="http://www.w3.org/2000/svg" width="20" height="20">
      <path fill="currentColor" fillRule="evenodd" clipRule="evenodd"
        d="M3 3h8V1H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v-2H3zm16 7l-6-5v4H5v2h8v4l6-5z"/>
    </svg>
  );
};
