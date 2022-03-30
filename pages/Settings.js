import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import {useTranslation} from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from '@expo/vector-icons';
import SwitchSelector from "react-native-switch-selector";
import {LangStorage, Languages} from "../constants/lang";
import ListOutline from "../components/ListOutline";
import {Colors} from "../constants/colors";

const switchOptions = [
    { label: "IT", value: Languages.it},
    { label: "EN", value: Languages.en}
];

export default function Settings() {
    const navigation = useNavigation();
    const { t, i18n } = useTranslation();

    const changeLanguage =  async (lng) => {
        await AsyncStorage.setItem(LangStorage.KEY, lng);
        await i18n.changeLanguage(lng);
    };

    const getInitialValue = () => {
        return switchOptions.findIndex(element => element.value === i18n.language);
    }

    return(
        <ListOutline
            textHeader={t('settings.title')}
            titleIcon={'settings-outline'}
            navigation={navigation}
        >
            <View style={styles.settings}>
                <View style={styles.settingsLang}>
                    <Ionicons name="language" size={20} color={Colors.dark} />
                    <Text style={styles.title}>{t('settings.lang')}</Text>
                </View>
                <SwitchSelector
                    style={styles.switch}
                    initial={getInitialValue()}
                    onPress={value => changeLanguage(value)}
                    textColor={Colors.primary}
                    selectedColor={Colors.light}
                    buttonColor={Colors.primary}
                    borderColor={Colors.primary}
                    hasPadding
                    options={switchOptions}
                    testID="gender-switch-selector"
                    accessibilityLabel="gender-switch-selector"
                />
            </View>

        </ListOutline>
    )
}

const styles = StyleSheet.create({
    settings: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 50,
        paddingHorizontal: 20
    },
    settingsLang: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "flex-start",
        paddingLeft: 20
    },
    title: {
        fontFamily: 'MS-Bold',
        paddingLeft: 10,
        fontSize: 14
    },
    switch: {
        paddingHorizontal: 20,
        paddingVertical: 10
    }
});