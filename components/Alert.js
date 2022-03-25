import { View, StyleSheet, Button, Alert } from "react-native";

const ShowAlert = (title, msg, leftButtonText, leftButtonHandler, rightButtonText, rightButtonHandler) => {
    const buttons = rightButtonText ? [
        {
            text: leftButtonText,
            onPress: leftButtonHandler,
            style: "cancel"
        },
        {
            text: "OK",
            onPress: rightButtonHandler
        }
    ] :
    [
        {
            text: leftButtonText,
            onPress: leftButtonHandler
        }
    ]

    return Alert.alert(
        title,
        msg,
        buttons
    );
}

export default ShowAlert;