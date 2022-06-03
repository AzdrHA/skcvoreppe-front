import React, {FC} from 'react';
import {IconProps} from '@components/types/IconProps';

export const EyeCloseIcon: FC<IconProps> = (props: IconProps) => {
  return (
    <svg className={'small-icon-svg'.concat(' ', props.extraClass ?? '')} xmlns="http://www.w3.org/2000/svg" width="20" height="20">
      <path fill="currentColor" fillRule="evenodd" clipRule="evenodd"
        d="M9.91 7.51l2.58 2.43A2.5 2.5 0 0 0 10 7.5zM8.2 5.9a4.38 4.38 0 0 1 1.8-.4 4.5 4.5 0 0 1 4.5 4.5 4.34 4.34 0 0 1-.29 1.55L17 14.14A14 14 0 0 0 20 10s-3-7-10-7a9.63 9.63 0 0 0-4 .85zm7.67 9.15L13 12.36l-1-.91-3.56-3.39L7 6.69 4.71 4.55 2 2 1 3l2.55 2.4A13.89 13.89 0 0 0 0 10s3 7 10 7a9.67 9.67 0 0 0 4.64-1.16L18 19l1-1-3.13-2.95zM10 14.5A4.5 4.5 0 0 1 5.5 10a4.45 4.45 0 0 1 .6-2.2l1.53 1.44a2.47 2.47 0 0 0-.13.76 2.49 2.49 0 0 0 3.41 2.32l1.54 1.45a4.47 4.47 0 0 1-2.45.73z"/>
    </svg>
  );
};
