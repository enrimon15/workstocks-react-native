import React from 'react'
import {Pressable, Text, View, StyleSheet} from 'react-native'
import {withTranslation} from "react-i18next";
import {Ionicons} from "@expo/vector-icons";
import CompanyAvatar from "./CompanyAvatar";
import * as DateUtils from "../util/DateUtils";
import {Colors} from "../constants/colors";

class JobItem extends React.Component{
    render(){
        const {title, img, onPress, companyName, address, createdAt, isNew, t} = this.props;

        return(
            <Pressable
                onPress={onPress}
                style={[styles.container, jobItemContainer]}
            >
                <View style={styles.header}>
                    <CompanyAvatar img={img} />

                    <View style={styles.headerTextContainer}>
                        <Text style={styles.headerText}>{title}</Text>

                        <View style={styles.headerCompany}>
                            <Ionicons name="location-outline" size={11} color={Colors.highlight} />
                            <Text style={styles.address}>
                                {address.city + ', ' + address.country}
                            </Text>
                        </View>

                        <Text style={styles.companyName}>{companyName}</Text>
                    </View>
                </View>

                <View style={styles.rightPart}>
                    {isNew && (<View style={styles.dotContainer}>
                        <View style={styles.dot}/>
                        <Text style={styles.new}>
                            {t('new')}
                        </Text>
                    </View>
                    )}

                    <Text style={styles.date}>
                        {DateUtils.formatDate(createdAt)}
                    </Text>
                </View>

            </Pressable>
        )
    }
}

// componente che permette la connessione tra un componente react e i18n
const JobItemTranslation = withTranslation()(JobItem);
export default JobItemTranslation;

const styles = StyleSheet.create({
    container: {
        shadowColor: Colors.shadow,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 2, // Android
    },
    header: {
        width: "70%",
        flexDirection: "row",
        alignItems:"center"
    },
    headerTextContainer: {
        paddingLeft:20
    },
    headerText: {
        color:Colors.darkGray,
        fontFamily:"MS-Bold",
        fontSize:13
    },
    headerCompany: {
        flexDirection: "row",
        marginTop: 3
    },
    address: {
        fontSize:11,
        color: Colors.highlight,
        fontFamily:"MS-Medium",
        marginLeft: 4
    },
    companyName: {
        fontSize:15,
        marginTop: 5,
        fontFamily:"MS-Bold"
    },
    rightPart: {
        justifyContent: "flex-end",
        width: "30%",
        alignItems: "flex-end"
    },
    dotContainer: {
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    dot: {
        height:4,
        width:4,
        borderRadius:4,
        backgroundColor:Colors.danger,
        marginHorizontal:4
    },
    new: {
        color:Colors.danger,
        fontSize:9,
        fontFamily:"MS-Bold"
    },
    date: {
        color:"#345c74",
        fontFamily:"MS-Medium",
        fontSize:10,
        marginTop: 3
    }
});

export const jobItemContainer = {
    flexDirection:"row",
    backgroundColor:Colors.light,
    padding:20,
    marginHorizontal:20,
    borderRadius:15,
    alignItems:"center",
    justifyContent: "space-between",
    marginTop:20,
    flex: 1
}