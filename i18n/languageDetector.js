import AsyncStorage from "@react-native-async-storage/async-storage";
import {LangStorage} from "../constants/lang";
import {getDeviceLang} from "../util/DeviceUtils";

export const languageDetector = {
    init: Function.prototype, // () => {}
    type: 'languageDetector',
    async: true,
    detect: async (callback) => {
        const userLang = await AsyncStorage.getItem(LangStorage.KEY);
        const deviceLang = userLang || getDeviceLang();
        callback(deviceLang);
    },
    cacheUserLanguage: () => {},
};