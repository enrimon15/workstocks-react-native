import React from 'react';
import {View,ImageBackground, Image,Text, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/colors';

export default class JobDetail extends React.Component {
    render(){
        return(
            <View style={{
                backgroundColor:"white",
                height:"100%",
                paddingHorizontal:20
            }}>
                <ImageBackground source={require('../assets/images/detail.png')}
                                 style={{marginLeft:50, width:"100%",height:250}}>
                    {/*<View style={{
                        backgroundColor:"#000",
                        height:30,
                        width:40,
                        marginLeft:-50,
                        marginTop:70,
                        borderRadius:8,
                        alignItems:"center",
                        justifyContent:"center"
                    }}>
                        <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                            <Image source={require('../images/back.png')} style={{width:25,height:10}}/>
                        </TouchableOpacity>

                    </View>*/}
                </ImageBackground>
                <View style={{
                    backgroundColor:"white",
                    shadowColor: "#84A4FF",
                    shadowOffset: {
                        width: 0,
                        height: 0,
                    },
                    shadowOpacity: 0.2,
                    shadowRadius: 10,
                    elevation: 2, // Android
                    padding:15,
                    borderRadius:15
                }}>
                    <View style={{
                        flexDirection:"row",
                        alignItems:"center",
                        justifyContent: 'space-between'
                    }}>
                        <View>
                            <Text style={{
                                fontSize:18,
                                fontFamily:"MS-Bold"
                            }}>Software Developer
                            </Text>

                            <View style={{flexDirection:"row",alignItems:"center", marginTop: 3}}>
                                <Ionicons name="location-outline" size={18} color="#B8B8B8" />
                                <Text style={{
                                    fontFamily:"MS-Bold",
                                    fontSize:13,
                                    color:"#B8B8B8",
                                    marginLeft: 5
                                }}>Vasto, IT</Text>
                            </View>
                        </View>
                        <View style={{
                            backgroundColor: Colors.primary,
                            height:40,
                            width:40,
                            borderRadius:5,
                            marginTop:5,
                            alignItems:"center",
                            justifyContent:"center"
                        }}>
                            <Ionicons name="ios-heart-outline" size={24} color="white" />

                        </View>


                    </View>
                    <View style={{
                        flexDirection:"row",
                        paddingTop:20,
                        alignItems:"center"
                    }}>
                        <Image resizeMode="contain" source={require('../assets/images/asana.png')} style={{width:40,height:40}}/>
                        <View style={{paddingLeft:20}}>
                            <Text style={{
                                fontFamily:"MS-Medium"
                            }}>Asana</Text>
                            <Text style={{
                                fontFamily:"MS-Regular",
                                color:"#B8B8B8",
                                fontSize: 12
                            }}>www.asana.com</Text>
                        </View>

                    </View>
                </View>

                <View style={{
                    flexDirection:"row",
                    marginTop:20,
                    alignItems: "center",
                    justifyContent: "space-between"
                }}>
                    <View style={{
                        backgroundColor:"white",
                        shadowColor: "#84A4FF",
                        shadowOffset: {
                            width: 0,
                            height: 0,
                        },
                        shadowOpacity: 0.2,
                        shadowRadius: 10,
                        elevation: 2, // Android
                        paddingVertical:10,
                        paddingHorizontal: 8,
                        borderRadius:8,
                        width:110,
                    }}>
                        <Text style={{
                            fontFamily:"MS-Bold",
                            color:"#B8B8B8",
                        }}>Experience</Text>
                        <Text style={{
                            fontFamily:"MS-Bold"
                        }}>2 year</Text>
                    </View>

                    <View style={{
                        backgroundColor:"white",
                        shadowColor: "#84A4FF",
                        shadowOffset: {
                            width: 0,
                            height: 0,
                        },
                        shadowOpacity: 0.2,
                        shadowRadius: 10,
                        elevation: 2, // Android
                        paddingVertical:10,
                        paddingHorizontal: 8,
                        borderRadius:8,
                        width:110
                    }}>
                        <Text style={{
                            fontFamily:"MS-Bold",
                            color:"#B8B8B8",
                        }}>Contratto</Text>
                        <Text style={{
                            fontFamily:"MS-Bold"
                        }}>Full Time</Text>
                    </View>

                    <View style={{
                        backgroundColor:"white",
                        shadowColor: "#84A4FF",
                        shadowOffset: {
                            width: 0,
                            height: 0,
                        },
                        shadowOpacity: 0.2,
                        shadowRadius: 10,
                        elevation: 2, // Android
                        paddingVertical:10,
                        paddingHorizontal: 8,
                        borderRadius:8,
                        width:110
                    }}>
                        <Text style={{
                            fontFamily:"MS-Bold",
                            color:"#B8B8B8",
                        }}>Salary</Text>
                        <Text style={{
                            fontFamily:"MS-Bold"
                        }}>30k - 40k</Text>
                    </View>

                </View>
                <View style={{
                    backgroundColor:"white",
                    shadowColor: "#84A4FF",
                    shadowOffset: {
                        width: 0,
                        height: 0,
                    },
                    shadowOpacity: 0.2,
                    shadowRadius: 10,
                    elevation: 2, // Android
                    borderRadius:15,
                    padding:20,
                    marginTop:20
                }}>
                    <Text style={{
                        fontFamily:"MS-Bold",
                        fontSize:20,
                        marginBottom:10
                    }}>Job Description</Text>
                    <Text style={{
                        fontFamily:"MS-Bold",
                        color:"#B2B2B2",
                    }}>
                        Amet minim mollit non deserunt ulliamco est sit aliqua dolor
                        do amet sit. Vellit officoa consequat duis enim velit mollit. Extertation venoima consequat sunt notserud amet.
                    </Text>
                </View>
                <View style={{
                    flexDirection: "row",
                    width:"100%",
                    position: 'absolute',
                    bottom:40,
                    marginHorizontal: 20,
                    paddingVertical: 10,
                    backgroundColor: Colors.primary,
                    alignItems:"center",
                    justifyContent:"center",
                    borderRadius:10,
                }}>

                        <Ionicons name="ios-briefcase-outline" size={28} color="white" />
                        <Text style={{
                            color:"white",
                            fontFamily:"MS-Regular",
                            marginHorizontal: 10
                        }}>Apply</Text>



                </View>
            </View>
        )
    }
}