import React from 'react';
import {Text,View,Image,TouchableOpacity} from 'react-native';

export default class JobItemHorizontal extends React.Component{
    render(){
        return(

            <TouchableOpacity
                onPress={this.props.onPress}
                style={{
                    marginTop:30,
                    backgroundColor:"#FFF",
                    height:150,
                    width:200,
                    shadowColor: "#84A4FF",
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
                    marginBottom:5
                }}
            >
                <Image
                    source={this.props.src}
                    resizeMode="contain"
                    style={{
                        width:40,
                        height:40,
                        borderRadius:10
                    }}
                />
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginVertical:10
                }}>
                    <Text style={{
                        fontFamily:"MS-Bold",
                        color:"#4f4a4a",
                        fontSize:12
                    }}>
                        {this.props.name}
                    </Text>
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
                        New
                    </Text>

                </View>
                <Text style={{
                    fontSize:9,
                    color:"#4f4a4a",
                    fontFamily:"MS-Regular"
                }}>
                    Full sleeves short dress with three attractive colors and and available in various sizes.
                </Text>


                <View style={{
                    flexDirection:"row",
                    marginTop:5,
                    alignItems:"center",
                    width:"100%"
                }}>
                    <View style={{
                        width:"80%"
                    }}>
                        <Text style={{
                            fontSize:15,
                            fontFamily:"MS-Bold"
                        }}>324.69 USD</Text>
                    </View>

                </View>

            </TouchableOpacity>
        );
    }
}