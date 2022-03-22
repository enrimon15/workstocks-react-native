import React from 'react'
import {Text,TouchableOpacity, View,Image} from 'react-native'
import CompanyAvatar from "./CompanyAvatar";
import {Ionicons} from "@expo/vector-icons";


export default class JobItem extends React.Component{
    render(){
        const {img,title, bg, onPress} = this.props
        return(
            <TouchableOpacity
                onPress={onPress}
                style={{
                    shadowColor: "#84A4FF",
                    shadowOffset: {
                        width: 0,
                        height: 0,
                    },
                    shadowOpacity: 0.2,
                    shadowRadius: 10,
                    elevation: 2, // Android
                    flexDirection:"row",
                    backgroundColor:bg,
                    padding:20,
                    marginHorizontal:20,
                    borderRadius:15,
                    alignItems:"center",
                    justifyContent: "space-between",
                    marginTop:20
                }}
            >
                <CompanyAvatar img={img} />

                <View style={{paddingHorizontal:20,}}>
                    <Text style={{
                        color:"#4f4a4a",
                        fontFamily:"MS-Bold",
                        fontSize:13,
                        width:170
                    }}>{title}</Text>

                    <View style={{flexDirection: "row", marginTop: 3}}>
                        <Ionicons name="location-outline" size={11} color="#f58084" />
                        <Text style={{
                            fontSize:11,
                            color:"#f58084",
                            fontFamily:"MS-Medium",
                            marginLeft: 4
                        }}>
                            Vasto, IT
                        </Text>
                    </View>

                    <Text style={{
                        fontSize:15,
                        marginTop: 5,
                        fontFamily:"MS-Bold"
                    }}>Asana Inc.</Text>
                </View>

                <View style={{justifyContent: "flex-end"}}>
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

                    <Text style={{
                        color:"#345c74",
                        fontFamily:"MS-Medium",
                        fontSize:10
                    }}>
                        12-03-2022
                    </Text>
                </View>

            </TouchableOpacity>
        )
    }
}