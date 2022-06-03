const home = '/';
const authRoute = '/auth';
const adminRoute = '/admin';

export const routes = {
  home: home,
  login: home.concat('connexion'),
  auth: {
    base: authRoute,
  },
  admin: {
    base: adminRoute,
    home: adminRoute.concat('/'),
  },
};
