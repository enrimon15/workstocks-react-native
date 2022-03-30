import React from "react";
import {View, StyleSheet} from "react-native";
import {Colors} from "../constants/colors";

export default function CardDetail({children, style}) {
    return (
        <View style={[styles.jobInfoContainer, style]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    jobInfoContainer: {
        marginTop: 15,
        marginHorizontal:10,
        backgroundColor: Colors.light,
        shadowColor: Colors.shadow,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 2, // Android
        padding:15,
        borderRadius:15
    },
});