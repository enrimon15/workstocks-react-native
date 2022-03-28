import {StyleSheet, Text, View} from "react-native";
import React from "react";
import CardDetail from "./CardDetail";
import Colors from "../../constants/colors";
import {StringUtils} from "../../util/StringUtils";

export default function Skills({skillList}) {

    return (
        <CardDetail>
            {skillList.map((item, index) => {
                return (
                    <View key={index} style={{flexDirection: "row", justifyContent: "flex-start", marginVertical: 10,}}>
                        <View style={{
                            height:4,
                            width:4,
                            borderRadius:4,
                            backgroundColor: Colors.accent,
                            marginHorizontal:8,
                            alignSelf: "center"
                        }}>

                        </View>
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
    jobDetailsInfo: {
        padding:10,
        borderRadius:8,
        width:110,
        marginTop: 0,
        marginHorizontal:0,
    },
    singleDetail: {
        fontFamily:"MS-Bold",
        color:"black"
    },
    detailInfo: {
        fontFamily:"MS-Bold",
        paddingTop: 1
    }
})