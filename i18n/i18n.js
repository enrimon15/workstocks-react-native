import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import {Languages} from "../constants/lang";
import {resources} from "./resources";
import {languageDetector} from "./languageDetector";

i18n
    // pass language detector
    .use(languageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    .init({
        // fallback
        fallbackLng: Languages.it,
        // string resources
        resources: resources,
        //debug: true,
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;