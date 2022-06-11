const home = '/';
const authRoute = '/auth';
const adminRoute = '/admin';

export const routes = {
  home: home,
  login: home.concat('connexion'),
  forgotPassword: home.concat('mot-de-passe-oublie'),
  resetPassword: home.concat('reinitialisation-de-mot-de-passe'),
  changePassword: home.concat('modifer-le-mot-de-passe-oublie'),
  auth: {
    base: authRoute,
  },
  admin: {
    base: adminRoute,
    home: adminRoute.concat('/'),
  },
};
