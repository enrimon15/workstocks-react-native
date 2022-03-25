import * as Animatable from "react-native-animatable";
import {
    Text,
    StyleSheet
} from 'react-native';
import React from "react";

const ErrorForm = ({text}) => {
    return (
        <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>{text}</Text>
        </Animatable.View>
    )
}

export default ErrorForm;

const styles = StyleSheet.create({
    errorMsg: {
        color: '#FF0000',
        fontSize: 12,
        fontFamily: "MS-Regular"
    }
})