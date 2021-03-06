import React from 'react';
import {Feather} from "@expo/vector-icons";
import * as Animatable from 'react-native-animatable';

export default function FormValidIndicator() {
    return (
        <Animatable.View
            animation="bounceIn"
        >
            <Feather
                name="check-circle"
                color="green"
                size={20}
            />
        </Animatable.View>
    )
}