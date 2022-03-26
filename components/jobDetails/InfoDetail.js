import {View, StyleSheet, Text} from "react-native";
import React from "react";
import CardDetail from "./CardDetail";
import Colors from "../../constants/colors";

export default function InfoDetail({title, text}) {

    return (
        <CardDetail style={styles.jobDetailsInfo}>
            <Text style={styles.singleDetail}>{title}</Text>
            <Text style={styles.detailInfo}>{text}</Text>
        </CardDetail>
    )
}

const styles = StyleSheet.create({
    jobDetailsInfo: {
        padding:10,
        borderRadius:8,
        width:110,
        marginTop: 0,
        marginHorizontal:0,
    },
    singleDetail: {
        fontFamily:"MS-Bold",
        color:Colors.accent
    },
    detailInfo: {
        fontFamily:"MS-Bold",
        paddingTop: 1
    }
})