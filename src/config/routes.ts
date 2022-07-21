const home = '/';
const authRoute = '/auth';
const adminRoute = '/admin';

export const routes = {
  home: '/',
  login: '/connexion',
  register: '/inscription',
  forgotPassword: '/mot-de-passe-oublie',
  resetPassword: '/reinitialisation-de-mot-de-passe',
  changePassword: '/modifer-le-mot-de-passe-oublie',
  validAccount: '/valider-mon-compte',
  checkout: '/payment',
  auth: {
    base: authRoute,
  },
  admin: {
    base: adminRoute,
    home: adminRoute.concat('/'),
  },
};
