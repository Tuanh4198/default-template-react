import i18n from 'i18next';
import { configEnv } from '../config/configEnv';
import { initReactI18next } from 'react-i18next';
import { defaultLanguage, defaultNamespace } from './type';
import { Screens } from '../screens';
import { resources } from './resources';

i18n.use(initReactI18next).init({
  resources,
  // debug: configEnv.ENV === 'DEV',
  ns: [defaultNamespace, ...Object.values(Screens)],
  defaultNS: defaultNamespace,
  fallbackLng: defaultLanguage,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
