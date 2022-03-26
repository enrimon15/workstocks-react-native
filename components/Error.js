import {StyleSheet, Text, Pressable, View} from "react-native";
import React from "react";
import Colors from "../constants/colors";
import { MaterialIcons } from '@expo/vector-icons';
import {useDispatch} from "react-redux";
import {cleanError} from "../store/actions/AppAction";

export default function Error({onPress}) {
    const dispatch = useDispatch();

    const clearErrorHandler = () => {
        dispatch(cleanError);
        onPress();
    }

    return (
        <View style={styles.errorContainer}>
            <MaterialIcons name="error-outline" size={30} color={Colors.primary} />
            <Text style={styles.textError}>Oops.. Qualcosa è andato storto!</Text>
            <Pressable
                onPress={clearErrorHandler}
                style={styles.button}
            >
                <Text style={styles.textButtonError}>Riprova</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    errorContainer: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30
    },
    textError: {
        fontFamily: "MS-Bold",
        marginTop: 4
    },
    button: {
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: Colors.primary
    },
    textButtonError: {
        fontFamily: "MS-Medium",
        color: "white"
    }
})