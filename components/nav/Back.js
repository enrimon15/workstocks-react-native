import {Pressable} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import React from "react";

export default function Back({navigation, iconColor}) {

    return (
        <Pressable onPress={() => navigation.goBack()}>
            <Ionicons name="ios-chevron-back" size={25} color={iconColor} />
        </Pressable>
    )
}