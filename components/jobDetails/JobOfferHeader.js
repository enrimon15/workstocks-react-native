import {StyleSheet, Text, Pressable, View} from "react-native";
import React from "react";
import Colors from "../../constants/colors";
import {Ionicons} from "@expo/vector-icons";
import CompanyAvatar from "../CompanyAvatar";
import CardDetail from "./CardDetail";

export default function JobOfferHeader({title, address, handleFavorite, isFavorite, companyPhoto, companyName,
                                           companyWebsite}) {

    return (
        <CardDetail>
            <View style={styles.jobInfo}>
                <View>
                    <Text style={styles.jobTitle}>{title}
                    </Text>

                    <View style={styles.jobLocationContainer}>
                        <Ionicons name="location-outline" size={18} color="#B8B8B8" />
                        <Text style={styles.location}>
                            {address}
                        </Text>
                    </View>
                </View>

                <Pressable
                    style={styles.favoriteButton}
                    onPress={handleFavorite}>
                    <Ionicons name={isFavorite ?
                        "ios-heart-sharp"
                        : "ios-heart-outline"}
                              size={24} color="white" />
                </Pressable>
            </View>

            <View style={styles.companyInfo}>
                <CompanyAvatar img={companyPhoto} />
                <View style={styles.companyInfoSpacer}>
                    <Text style={styles.companyName}>
                        {companyName}
                    </Text>
                    <Text style={styles.website}>
                        {companyWebsite}
                    </Text>
                </View>

            </View>
        </CardDetail>
    )
}

const styles = StyleSheet.create({
    jobInfo: {
        flexDirection:"row",
        alignItems:"center",
        justifyContent: 'space-between'
    },
    jobTitle: {
        fontSize:18,
        fontFamily:"MS-Bold"
    },
    jobLocationContainer: {
        flexDirection:"row",
        alignItems:"center",
        marginTop: 3
    },
    location: {
        fontFamily:"MS-Bold",
        fontSize:13,
        color: Colors.accent,
        marginLeft: 5
    },
    favoriteButton: {
        backgroundColor: Colors.primary,
        height:40,
        width:40,
        borderRadius:5,
        marginTop:5,
        alignItems:"center",
        justifyContent:"center"
    },
    companyInfo: {
        flexDirection:"row",
        paddingTop:20,
        alignItems:"center"
    },
    companyInfoSpacer: {paddingLeft:20},
    companyName: {
        fontFamily:"MS-Medium"
    },
    website: {
        fontFamily:"MS-Regular",
        color:"#B8B8B8",
        fontSize: 12,
        marginTop: 3
    }
})