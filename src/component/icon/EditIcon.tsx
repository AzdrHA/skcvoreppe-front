import React, {FC} from 'react';
import {IconProps} from '@app/type/IconProps';

export const EditIcon: FC<IconProps> = (props: IconProps) => {
  return (
    <svg className={'small-icon-svg'.concat(' ', props.extraClass ?? '')} version="1.0" xmlns="http://www.w3.org/2000/svg" width="1600.000000pt" height="1600.000000pt"
      viewBox="0 0 1600.000000 1600.000000" preserveAspectRatio="xMidYMid meet">
      <g transform="translate(0.000000,1600.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
        <path fill="currentColor" fillRule="evenodd" clipRule="evenodd"
          d="M11829 14404 c-170 -30 -341 -110 -481 -224 -40 -32 -242 -228 -448 -434 l-375 -376 1318 -1318 1317 -1317 399 400 c219 220 420 429 446 465 281 385 270 915 -29 1285 -93 115 -1268 1283 -1346 1338 -234 164 -529 231 -801 181z"/>
        <path fill="currentColor" fillRule="evenodd" clipRule="evenodd"
          d="M6311 9156 c-2957 -2957 -3153 -3156 -3130 -3164 13 -5 191 -65 395 -133 l372 -123 131 -655 c72 -359 132 -656 134 -658 2 -2 299 -62 658 -134 l655 -131 128 -387 c71 -212 131 -389 135 -393 4 -4 1426 1412 3161 3147 l3155 3155 -1315 1315 c-723 723 -1317 1315 -1320 1315 -3 0 -1425 -1420 -3159 -3154z"/>
        <path fill="currentColor" fillRule="evenodd" clipRule="evenodd"
          d="M1880 2950 c-293 -833 -303 -862 -297 -919 6 -66 26 -112 71 -159 52 -57 101 -76 186 -77 73 0 97 8 915 299 462 164 842 300 845 303 5 4 -1401 1413 -1411 1413 -3 0 -142 -387 -309 -860z"/>
      </g>
    </svg>
  );
};
