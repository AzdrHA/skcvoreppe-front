import React from 'react';
import {FrenchKarateFederationIcon} from '@app/component/icon/FrenchKarateFederationIcon';
import {VoreppeCityIcon} from '@app/component/icon/VoreppeCityIcon';
import {IsereDepartmentIcon} from '@app/component/icon/IsereDepartmentIcon';
import {TwitterIcon} from '@app/component/icon/social/TwitterIcon';
import {TextLinkPrimary} from '@app/component/style/button/TextLink';
import {EmailIcon} from '@app/component/icon/EmailIcon';
import {CallPhone} from '@app/component/icon/CallPhone';
import {ExternalTextLinkDefault} from '@app/component/style/button/ExternalTextLink';

export const Footer = () => {
  return (
    <footer>
      <div className={'bg-sky-blue p-5'}>
        <div className={'w-80 mx-auto text-center'}>
          <div>
            ICON
          </div>
          <div className={'py-1.5'} />
          <div>
            Ensemble Sportif Ernest Pigneguy 548 Rue de Bourg-Vieux 38340 Voreppe
          </div>
          <div className={'py-1.5'} />
          <div className={'flex items-center justify-center'}>
            <div>
              <CallPhone/>
            </div>
            <div>
              <ExternalTextLinkDefault to={'phoneto:06 27 18 50 45'}>06 27 18 50 45</ExternalTextLinkDefault>
            </div>
          </div>
          <div className={'py-1.5'} />
          <div className={'flex items-center justify-center'}>
            <div>
              <EmailIcon/>
            </div>
            <div>
              <ExternalTextLinkDefault to={'mailto:contact@skcvoreppe.fr'}>contact@skcvoreppe.fr</ExternalTextLinkDefault>
            </div>
          </div>
          <div className={'py-1.5'} />
          <div className={''}>
            <TwitterIcon/>
          </div>
        </div>
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
