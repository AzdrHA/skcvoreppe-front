import React, {FC} from 'react';
import {IconProps} from '@components/types/IconProps';

export const TicksIcon: FC<IconProps> = (props: IconProps) => {
  return (
    <svg className={'small-icon-svg'.concat(' ', props.extraClass ?? '')} xmlns="http://www.w3.org/2000/svg" width="682.667" height="682.667" viewBox="0 0 512 512"
      preserveAspectRatio="xMidYMid meet">
      <path fill="currentColor" fillRule="evenodd" clipRule="evenodd"
        d="M476 70.5c-4.7 2.2-27 24.1-160 157L161.5 382 101 321.6l-64-62.2c-4.9-2.6-17.1-2.6-22.3 0-5.4 2.7-9.6 7.2-12.5 13.5-3 6.5-2.7 14.2.8 21.2 3.1 6.2 140.7 143.8 146.9 146.9 2.5 1.2 7 2.5 10.2 2.7 4.7.5 6.6.1 11.5-2.1 5.3-2.4 21.4-18.1 170.6-167.4l167.4-170.6c2.2-4.9 2.6-6.8 2.1-11.6-1.2-13.2-10.9-22.8-24.2-23.7-4.9-.3-7 0-11.5 2.2z"/>
    </svg>
  );
};
