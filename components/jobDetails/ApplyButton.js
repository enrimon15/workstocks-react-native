import {StyleSheet, Text, Pressable} from "react-native";
import React from "react";
import Colors from "../../constants/colors";
import {Ionicons} from "@expo/vector-icons";

export default function ApplyButton({text, isApplicated, onPress}) {

    return (
        <Pressable
            style={styles.buttonContainer}
            onPress={onPress}
            disabled={isApplicated}
        >
            <Ionicons name={isApplicated ? 'ios-briefcase-sharp' : 'ios-briefcase-outline'} size={28} color="white" />
            <Text style={styles.textButton}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: "row",
        width:"100%",
        position: 'absolute',
        bottom:40,
        paddingVertical: 10,
        backgroundColor: Colors.primary,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:10
    },
    textButton: {
        color:"white",
        fontFamily:"MS-Regular",
        marginHorizontal: 10
    }
})