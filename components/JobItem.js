import React from 'react'
import {Text,TouchableOpacity, View,Image} from 'react-native'


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
                    marginTop:10
                }}
            >
                <Image
                    source={img}
                    style={{width:40,height:40}}
                    resizeMode="contain"
                />

                <View>
                    <Text style={{
                        color:"#345c74",
                        fontFamily:"MS-Bold",
                        fontSize:13,
                        paddingHorizontal:20,
                        width:170
                    }}>{title}</Text>
                    <Text style={{
                        color:"#f58084",
                        fontFamily:"MS-Medium",
                        fontSize:12,
                        paddingHorizontal:20
                    }}>
                        10 hours, 19 lessons
                    </Text>
                </View>
                <Text style={{
                    color:"#345c74",
                    fontFamily:"MS-Medium",
                    fontSize:13,
                    paddingLeft:10,
                    paddingRight:10
                }}>
                    25%
                </Text>

            </TouchableOpacity>
        )
    }
}