import React from "react";
import {Image, Pressable, StyleSheet} from "react-native";

export default function Hamburger(props) {
    const {navigation} = props;

    return (
        <Pressable onPress={() => navigation.toggleDrawer()}>
            <Image
                source={require('../../assets/images/menu.png')}
                style={styles.menuImage}
            />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    menuImage: {
        height:25,
        width:20,
        marginLeft: 25
    }
});