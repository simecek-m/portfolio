import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from "./translation/en.json";
import cs from "./translation/cs.json";

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en,
      cs
    }
  });


export default i18n;
