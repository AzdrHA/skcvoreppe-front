import React, {FC} from 'react';
import {Link} from 'react-router-dom';
import {routes} from '@app/config/routes';
import {Footer} from '@app/component/footer/Footer';
import {MaintenanceScreen} from '@screens/MaintenanceScreen';

const Application: FC = () => {
  return (
    <div className={'min-h-screen'}>
      <MaintenanceScreen/>
      {/* <Link className={'mb-auto'} to={routes.login}>Connexion</Link>*/}
      {/* <Footer/>*/}
    </div>
  );
};

export default Application;
