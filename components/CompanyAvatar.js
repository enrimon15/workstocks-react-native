import {Image, StyleSheet} from "react-native";
import React from "react";

export default function CompanyAvatar(props) {
    const {img} = props;

    return (
        <Image
            source={img}
            style={styles.avatar}
            resizeMode="contain"
        />
    )
}

const styles = StyleSheet.create({
    avatar: {width:40, height:40}
})