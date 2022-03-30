import React from "react";
import {StyleSheet, Text, View} from "react-native";
import CardDetail from "../CardDetail";
import {Colors} from "../../constants/colors";
import * as StringUtils from "../../util/StringUtils";

export default function Skills({skillList}) {

    return (
        <CardDetail>
            {skillList.map((item, index) => {
                return (
                    <View key={index} style={styles.itemContainer}>
                        <View style={styles.dot} />
                        <Text style={styles.singleDetail}>
                            {StringUtils.capitalize(item)}
                        </Text>
                    </View>
                )}
            )}
        </CardDetail>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        marginVertical: 10
    },
    singleDetail: {
        fontFamily:"MS-Bold",
        color: Colors.dark
    },
    dot: {
        height:4,
        width:4,
        borderRadius:4,
        backgroundColor: Colors.accent,
        marginHorizontal:8,
        alignSelf: "center"
    }
});