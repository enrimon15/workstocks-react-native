import React from "react";
import {Image, SafeAreaView, Text, View, StyleSheet} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {Colors} from "../constants/colors";
import Back from "./nav/Back";

export default function ListOutline({navigation, textHeader, children, titleIcon}) {
    return (
        <View style={styles.background}>
            <View style={styles.headerContainer}>
                <SafeAreaView>
                    <Back navigation={navigation} iconColor={Colors.light} />
                    <View style={styles.header}>
                        <View style={styles.textHeaderContainer}>
                            {titleIcon && <Ionicons style={styles.icon} name={titleIcon} size={28} color={Colors.light} />}
                            <Text style={styles.textTitle}>{textHeader}</Text>
                        </View>
                        <View style={styles.imageContainer}>
                            <Image
                                source={require('../assets/images/undraw.png')}
                                style={styles.imageHeader}
                                resizeMode="contain"
                            />
                        </View>
                    </View>
                </SafeAreaView>
            </View>

            {children}

        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: Colors.light,
        flex:1
    },
    headerContainer: {
        backgroundColor: Colors.primary,
        height:"28%",
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
        paddingHorizontal:20,
        shadowColor: Colors.shadow,
        shadowOffset: {
            width: 0,
            height:0,
        },
        shadowOpacity: 10,
        shadowRadius: 20,
        elevation: 2, // Android
    },
    header: {
        flexDirection:"row",
        alignItems:"center",
        marginTop:25,
        width:"100%"
    },
    textHeaderContainer: {
        width:"70%",
        flexDirection: "row"
    },
    textTitle: {
        fontSize:28,
        color: Colors.light,
        marginLeft: 10,
        fontFamily:"MS-Medium"
    },
    imageContainer: {
        width:"30%",
        alignItems:"flex-end"
    },
    imageHeader: {
        height:100,
        width:100
    },
    icon: {alignSelf: "center"}
});