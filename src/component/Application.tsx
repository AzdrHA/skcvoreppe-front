import React, {FC} from 'react';
import {Link} from 'react-router-dom';
import {routes} from '@app/config/routes';

const Application: FC = () => {
  return (
    <div>
      <Link to={routes.login}>Connexion</Link>
    </div>
  );
};

export default Application;
