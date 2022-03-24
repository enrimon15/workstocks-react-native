import { View, StyleSheet, Button, Alert } from "react-native";

const ShowAlert = (title, msg, leftButtonText, rightButtonText, leftButtonHandler, rightButtonHandler) =>
    Alert.alert(
        title,
        msg,
        [
            {
                text: leftButtonText,
                onPress: leftButtonHandler,
                style: "cancel"
            },
            {   text: "OK",
                onPress: rightButtonHandler
            }
        ]
    );

export default ShowAlert;