import React, {FC} from 'react';
import {IconProps} from '@app/type/IconProps';

export const LockIcon: FC<IconProps> = (props: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className={'small-icon-svg'.concat(' ', props.extraClass ?? '')}>
      <path fill="currentColor" fillRule="evenodd" clipRule="evenodd"
        d="M16.07 8H15V5s0-5-5-5-5 5-5 5v3H3.93A1.93 1.93 0 0 0 2 9.93v8.15A1.93 1.93 0 0 0 3.93 20h12.14A1.93 1.93 0 0 0 18 18.07V9.93A1.93 1.93 0 0 0 16.07 8zM10 16a2 2 0 1 1 2-2 2 2 0 0 1-2 2zm3-8H7V5.5C7 4 7 2 10 2s3 2 3 3.5z"/>
    </svg>
  );
};
