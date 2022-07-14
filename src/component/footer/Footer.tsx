import React from 'react';
import {FrenchKarateFederationIcon} from '@app/component/icon/FrenchKarateFederationIcon';
import {VoreppeCityIcon} from '@app/component/icon/VoreppeCityIcon';
import {IsereDepartmentIcon} from '@app/component/icon/IsereDepartmentIcon';
import {EmailIcon} from '@app/component/icon/EmailIcon';
import {CallPhone} from '@app/component/icon/CallPhone';
import {PrimaryExternalTextLink} from '@app/component/ui/button/ExternalTextLink';
import {AppConfig} from '@app/config/AppConfig';

export const Footer = () => {
  return (
    <footer className={'mt-auto'}>
      <div className={'bg-sky-blue p-5'}>
        <div className={'w-80 mx-auto text-center'}>
          <PrimaryExternalTextLink hiddenExternalLink={true} to={AppConfig.pos_map}>{AppConfig.pos}</PrimaryExternalTextLink>
          <div className={'py-1'}/>
          <PrimaryExternalTextLink beforeIcon={<CallPhone/>} to={`phoneto:${AppConfig.phone}`}>{AppConfig.phone}</PrimaryExternalTextLink>
          <div className={'py-1'}/>
          <PrimaryExternalTextLink beforeIcon={<EmailIcon/>} to={`mailto:${AppConfig.mail}`}>{AppConfig.mail}</PrimaryExternalTextLink>
          <div className={'py-1'}/>
        </div>
        {/* <div className={'w-80 mx-auto text-center'}>
          <div>
            ICON
          </div>
          <div className={'py-1.5'} />
          <div className={''}>
            <TwitterIcon/>
          </div>
        </div>*/}
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
