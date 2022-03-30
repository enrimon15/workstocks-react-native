import React from "react";
import {
    Text,
    StyleSheet
} from 'react-native';
import * as Animatable from "react-native-animatable";
import {Colors} from "../../constants/colors";

export default function ErrorForm({text}) {
    return (
        <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>{text}</Text>
        </Animatable.View>
    )
}

const styles = StyleSheet.create({
    errorMsg: {
        color: Colors.danger,
        fontSize: 12,
        fontFamily: "MS-Regular"
    }
});