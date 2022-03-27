import React from 'react'
import {Pressable, Text, View} from 'react-native'
import CompanyAvatar from "./CompanyAvatar";
import {Ionicons} from "@expo/vector-icons";
import DateUtils from "../util/DateUtils";
import Colors from "../constants/colors";

export const jobItemContainer = {
    flexDirection:"row",
    backgroundColor:"white",
    padding:20,
    marginHorizontal:20,
    borderRadius:15,
    alignItems:"center",
    justifyContent: "space-between",
    marginTop:20,
    flex: 1
}


export default class JobItem extends React.Component{
    render(){
        const {title, img, onPress, companyName, address, createdAt, isNew} = this.props;

        return(
            <Pressable
                onPress={onPress}
                style={[{
                    shadowColor: "#84A4FF",
                    shadowOffset: {
                        width: 0,
                        height: 0,
                    },
                    shadowOpacity: 0.2,
                    shadowRadius: 10,
                    elevation: 2, // Android
                }, jobItemContainer]}
            >
                <View style={{
                    width: "70%",
                    flexDirection: "row",
                    alignItems:"center"
                }}>
                <CompanyAvatar img={img} />

                <View style={{paddingLeft:20,}}>
                    <Text style={{
                        color:"#4f4a4a",
                        fontFamily:"MS-Bold",
                        fontSize:13
                    }}>{title}</Text>

                    <View style={{flexDirection: "row", marginTop: 3}}>
                        <Ionicons name="location-outline" size={11} color={Colors.highlight} />
                        <Text style={{
                            fontSize:11,
                            color: Colors.highlight,
                            fontFamily:"MS-Medium",
                            marginLeft: 4
                        }}>
                            {address.city + ', ' + address.country}
                        </Text>
                    </View>

                    <Text style={{
                        fontSize:15,
                        marginTop: 5,
                        fontFamily:"MS-Bold"
                    }}>{companyName}</Text>
                </View>
                </View>

                <View style={{justifyContent: "flex-end", width: "30%", alignItems: "flex-end"}}>
                    {isNew && (
                    <View style={{flexDirection: "row", justifyContent: "flex-end"}}>
                        <View style={{
                            height:4,
                            width:4,
                            borderRadius:4,
                            backgroundColor:"red",
                            marginHorizontal:4
                        }}>

                        </View>
                        <Text style={{
                            color:"red",
                            fontSize:9,
                            fontFamily:"MS-Bold"
                        }}>
                            Nuova
                        </Text>
                    </View>
                    )}

                    <Text style={{
                        color:"#345c74",
                        fontFamily:"MS-Medium",
                        fontSize:10,
                        marginTop: 3
                    }}>
                        {DateUtils.formatDate(createdAt)}
                    </Text>
                </View>

            </Pressable>
        )
    }
}