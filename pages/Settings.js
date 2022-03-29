import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import {ListOutline} from "../components/ListOutline";
import {useTranslation} from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {LangStorage, Languages} from "../constants/lang";
import { Ionicons } from '@expo/vector-icons';
import SwitchSelector from "react-native-switch-selector";
import Colors from "../constants/colors";

const switchOptions = [
    { label: "IT", value: Languages.it},
    { label: "EN", value: Languages.en}
];

const Settings = () => {
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
            textHeader={'Impostazioni'}
            titleIcon={'settings-outline'}
            navigation={navigation}
        >
            <View style={styles.settings}>
                <View style={styles.settingsLang}>
                    <Ionicons name="language" size={20} color="black" />
                    <Text style={styles.title}>Lingua</Text>
                </View>
                <SwitchSelector
                    style={styles.switch}
                    initial={getInitialValue()}
                    onPress={value => changeLanguage(value)}
                    textColor={Colors.primary}
                    selectedColor="white"
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
export default Settings;

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