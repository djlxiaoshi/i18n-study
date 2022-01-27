import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


type LanguageRes = {
    [name: string]: any;
}

async function importResourceByType(language:string) {
    switch(language) {
        case 'en': {
            const resource = await import(/* webpackChunkName:"en-language" */ './locales/en.json');
            return resource.default
        }
        case 'zh': {
            const resource = await import(/* webpackChunkName:"zh-language" */ './locales/zh.json');
            return resource.default
        }
        default: {
            const resource = await import(/* webpackChunkName:"default-language" */ './locales/default.json');
            return resource.default
        }
    }
}

export default async function i18nInit() {
    const defaultResource = await importResourceByType('default');
    const currentLanguage = localStorage.getItem('language');
    const languageRes: LanguageRes = {
        default: {
            translation: defaultResource
        }
    }
    
    if(currentLanguage && currentLanguage !== 'default') {
        const resource = await import(`./locales/${currentLanguage}.json`);
        languageRes[currentLanguage] = {
            translation: resource.default
        }
    } 

    i18n
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        fallbackLng: 'default',
        lng: currentLanguage || 'default',
        debug: true,
        resources: languageRes
    });
}


  export async function toggleLanguage(language: string) {
    const resource = await importResourceByType(language);
    i18n.addResourceBundle(language, 'translation', resource, true, true);
    i18n.changeLanguage(language);
    localStorage.setItem('language', language);
  }

