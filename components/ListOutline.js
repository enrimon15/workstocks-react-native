import {Image, SafeAreaView, Text, View, StyleSheet} from "react-native";
import Colors from "../constants/colors";
import Back from "./nav/Back";
import {Ionicons} from "@expo/vector-icons";
import React from "react";

export const ListOutline = ({navigation, textHeader, children, titleIcon}) => {

    return (
        <View style={styles.background}>
            <View style={styles.headerContainer}>
                <SafeAreaView>
                    <Back navigation={navigation} iconColor={"white"} />
                    <View style={styles.header}>
                        <View style={styles.textHeaderContainer}>
                            {titleIcon && <Ionicons style={styles.icon} name={titleIcon} size={28} color="white" />}
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
        backgroundColor:"white",
        flex:1
    },
    headerContainer: {
        backgroundColor: Colors.primary,
        height:"28%",
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
        paddingHorizontal:20,
        shadowColor: "#84A4FF",
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
        width:"50%",
        flexDirection: "row"
    },
    textTitle: {
        fontSize:28,
        color:"#FFF",
        marginLeft: 10,
        fontFamily:"MS-Medium"
    },
    imageContainer: {
        width:"50%",
        alignItems:"flex-end"
    },
    imageHeader: {
        height:100,
        width:100
    },
    icon: {alignSelf: "center"}
})