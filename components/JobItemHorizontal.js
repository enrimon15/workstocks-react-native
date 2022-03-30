import React from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';
import {Ionicons} from "@expo/vector-icons";
import CompanyAvatar from "./CompanyAvatar";
import {Colors} from "../constants/colors";

export default class JobItemHorizontal extends React.Component{
    render(){
        const {title, img, onPress, companyName, address} = this.props;

        return(
            <Pressable
                onPress={onPress}
                style={styles.card}
            >
                <CompanyAvatar img={img} />

                <Text style={styles.title}>
                    {title}
                </Text>

                <View style={styles.addressContainer}>
                    <Ionicons name="location-outline" size={11} color={Colors.darkGray} />
                    <Text style={styles.address}>
                        {address.city + ', ' + address.country}
                    </Text>
                </View>

                <Text style={styles.companyName}>{companyName}</Text>

            </Pressable>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        marginTop:20,
        backgroundColor: Colors.light,
        width:200,
        shadowColor: Colors.shadow,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 2, // Android
        borderRadius:10,
        padding:15,
        marginRight:30,
        marginLeft:2,
        marginBottom:15
    },
    title: {
        fontFamily:"MS-Bold",
        color: Colors.darkGray,
        fontSize:13,
        marginVertical: 5
    },
    addressContainer: {
        flexDirection: "row"
    },
    address: {
        fontSize:11,
        color:Colors.darkGray,
        fontFamily:"MS-Regular",
        marginLeft: 4
    },
    companyName: {
        fontSize:15,
        marginTop: 5,
        fontFamily:"MS-Bold"
    }
});