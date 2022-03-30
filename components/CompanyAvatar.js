import React from "react";
import {Image, StyleSheet} from "react-native";

export default function CompanyAvatar({img}) {
    return (
        <Image
            source={{uri: `data:image/jpeg;base64,${img}`}}
            style={styles.avatar}
            resizeMode="contain"
        />
    )
}

const styles = StyleSheet.create({
    avatar: {
        width:40,
        height:40
    }
});