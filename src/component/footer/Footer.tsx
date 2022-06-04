import React from 'react';
import {FrenchKarateFederationIcon} from '@app/component/icon/FrenchKarateFederationIcon';
import {VoreppeCityIcon} from '@app/component/icon/VoreppeCityIcon';
import {IsereDepartmentIcon} from '@app/component/icon/IsereDepartmentIcon';

export const Footer = () => {
  return (
    <footer>
      <div className={'bg-sky-blue'}>

      </div>
      <div className={'bg-white'}>
        <div className={'logo flex w-full items-center justify-center py-4'}>
          <FrenchKarateFederationIcon/>
          <VoreppeCityIcon extraClass={'mx-4'}/>
          <IsereDepartmentIcon/>
        </div>
      </div>
    </footer>
  );
};
