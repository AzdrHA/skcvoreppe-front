import React, {FC} from 'react';
import {IconProps} from '@app/type/IconProps';

export const ExternalLinkIcon: FC<IconProps> = (props: IconProps) => {
  return (
    <svg className={'small-icon-svg'.concat(' ', props.extraClass ?? '')} xmlns="http://www.w3.org/2000/svg" viewBox="0 -256 1850 1850">
      <path
        d="M1438.373 818.949v320q0 119-84.5 203.5-84.5 84.5-203.5 84.5h-832q-119 0-203.5-84.5-84.5-84.5-84.5-203.5v-832q0-119 84.5-203.5 84.5-84.5 203.5-84.5h704q14 0 23 9 9 9 9 23v64q0 14-9 23-9 9-23 9h-704q-66 0-113 47-47 47-47 113v832q0 66 47 113 47 47 113 47h832q66 0 113-47 47-47 47-113v-320q0-14 9-23 9-9 23-9h64q14 0 23 9 9 9 9 23zm384-864v512q0 26-19 45-19 19-45 19-26 0-45-19l-176-176-652 652q-10 10-23 10-13 0-23-10l-114-114q-10-10-10-23 0-13 10-23l652-652-176-176q-19-19-19-45 0-26 19-45 19-19 45-19h512q26 0 45 19 19 19 19 45z"/>
    </svg>
  );
};
