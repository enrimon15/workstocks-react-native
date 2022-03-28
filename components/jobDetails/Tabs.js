import {View, StyleSheet, Text, TouchableOpacity} from "react-native";
import React from "react";
import Colors from "../../constants/colors";

const DESCRIPTION = 'DESCRIPTION';
const MAP = 'MAP';
const SKILLS = 'SKILLS';

export default function TabDetails({selectedTab, onTabPressed}) {

    return (
        <View style={styles.tabBar}>
            <TouchableOpacity
                onPress={() => onTabPressed(DESCRIPTION)}
                style={[
                    styles.tab,
                    {borderBottomColor: selectedTab === DESCRIPTION ? Colors.primary : "white"}
                ]}
            >
                <Text style={[
                    styles.tabTitle,
                    {color: selectedTab === DESCRIPTION ? Colors.primary : Colors.accent}
                ]}>DESCRIZIONE</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => onTabPressed(MAP)}
                style={[
                    styles.tab,
                    {borderBottomColor: selectedTab === MAP ? Colors.primary : "white"}
                ]}
            >
                <Text style={[
                    styles.tabTitle,
                    {color: selectedTab === MAP ? Colors.primary : Colors.accent}
                ]}>MAPPA</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => onTabPressed(SKILLS)}
                style={[
                    styles.tab,
                    {borderBottomColor: selectedTab === SKILLS ? Colors.primary : "white"}
                ]}
            >
                <Text style={[
                    styles.tabTitle,
                    {color: selectedTab === SKILLS ? Colors.primary : Colors.accent}
                ]}>COMPETENZE</Text>
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