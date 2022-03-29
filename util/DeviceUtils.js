import * as Localization from "expo-localization";
import {Languages} from "../constants/lang";

export function getDeviceLang() {
    let locale = Localization.locale;
    if (locale && (locale.substring(0,2) in Languages)) {
        return locale.substring(0,2);
    }

    return Languages.it;
}