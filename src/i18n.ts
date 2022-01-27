import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import resources from './locales'
// don't want to use this?
// have a look at the Quick start guide 
// for passing in lng and translations on init

export default function i18nInit() {
    const defaultLanguage = localStorage.getItem('language');

    i18n
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
      fallbackLng: 'zh',
      lng: defaultLanguage || 'zh',
      debug: true,
      resources: resources,
    });
}


  export async function toggleLanguage() {
    const currentLan = localStorage.getItem('language');
    const toggleLan = currentLan === 'en' ? 'zh' : 'en';

    switch(toggleLan) {
        case 'en': {
            const resource = await import(/* webpackChunkName:"en" */ './locales/en.json');
            i18n.addResourceBundle(toggleLan, 'translation', resource.default, true, true);
            break;
        }
        case 'zh': {
            const resource = await import(/* webpackChunkName:"zh" */ './locales/zh.json');
            i18n.addResourceBundle(toggleLan, 'translation', resource.default, true, true);
            localStorage.setItem('language', toggleLan);
            break;
        }
    }
    i18n.changeLanguage(toggleLan);
    localStorage.setItem('language', toggleLan);
  }

