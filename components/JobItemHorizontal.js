import React from 'react';
import {Text,View,Image,TouchableOpacity,StyleSheet} from 'react-native';
import CompanyAvatar from "./CompanyAvatar";
import {Ionicons} from "@expo/vector-icons";

export default class JobItemHorizontal extends React.Component{
    render(){
        return(

            <TouchableOpacity
                onPress={this.props.onPress}
                style={styles.card}
            >
                <CompanyAvatar img={this.props.img} />

                <Text style={{
                    fontFamily:"MS-Bold",
                    color:"#4f4a4a",
                    fontSize:13,
                    marginVertical: 5
                }}>
                    {this.props.name}
                </Text>

                <View style={{flexDirection: "row"}}>
                    <Ionicons name="location-outline" size={11} color="#4f4a4a" />
                    <Text style={{
                        fontSize:11,
                        color:"#4f4a4a",
                        fontFamily:"MS-Regular",
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

            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        marginTop:20,
        backgroundColor:"#FFF",
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
        marginBottom:15
    }
})