import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

const translations = {};
['form'].map((n) => {
  Object.assign(translations, {[n]: require(`./translation/${n}/fr.json`)});
});

i18n
    .use(initReactI18next)
    .init({
      resources: {
        fr: {
          ...translations,
          translation: require('./translation/message/fr.json'),
        },
      },
      lng: 'fr',
      fallbackLng: 'fr',
      interpolation: {
        escapeValue: false,
      },
    });
