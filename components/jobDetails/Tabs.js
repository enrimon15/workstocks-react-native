import React from "react";
import {View, StyleSheet, Text, TouchableOpacity} from "react-native";
import {useTranslation} from "react-i18next";
import {Colors} from "../../constants/colors";

export const DESCRIPTION = 'DESCRIPTION';
export const MAP = 'MAP';
export const SKILLS = 'SKILLS';

export default function TabDetails({selectedTab, onTabPressed}) {
    const {t} = useTranslation();

    return (
        <View style={styles.tabBar}>
            <TouchableOpacity
                onPress={() => onTabPressed(DESCRIPTION)}
                style={[
                    styles.tab,
                    {borderBottomColor: selectedTab === DESCRIPTION ? Colors.primary : Colors.light}
                ]}
            >
                <Text style={[
                    styles.tabTitle,
                    {color: selectedTab === DESCRIPTION ? Colors.primary : Colors.accent}
                ]}>{t('detail.description')}</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => onTabPressed(MAP)}
                style={[
                    styles.tab,
                    {borderBottomColor: selectedTab === MAP ? Colors.primary : Colors.light}
                ]}
            >
                <Text style={[
                    styles.tabTitle,
                    {color: selectedTab === MAP ? Colors.primary : Colors.accent}
                ]}>{t('detail.map')}</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => onTabPressed(SKILLS)}
                style={[
                    styles.tab,
                    {borderBottomColor: selectedTab === SKILLS ? Colors.primary : Colors.light}
                ]}
            >
                <Text style={[
                    styles.tabTitle,
                    {color: selectedTab === SKILLS ? Colors.primary : Colors.accent}
                ]}>{t('detail.skills')}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    tabBar: {
        flexDirection:"row",
        paddingTop:20,
        marginHorizontal: 10,
        justifyContent: "space-around"
    },
    tab: {
        borderBottomWidth:4,
        paddingVertical:6
    },
    tabTitle: {
        fontFamily:"MS-Bold"
    }
})