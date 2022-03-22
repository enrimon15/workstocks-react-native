import React from 'react';
import {View, Text, ImageBackground, StyleSheet, TextInput, ScrollView, Image, TouchableOpacity} from "react-native";
import { Modalize } from 'react-native-modalize'
import { Ionicons } from '@expo/vector-icons';
import JobItem from "../components/JobItem";
import JobItemHorizontal from "../components/JobItemHorizontal";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {navigation} = this.props;

        return (
            <ImageBackground
                source={require('../assets/images/banner.png')}
                style={styles.imageBackground}
            >
                <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                    <Image
                        source={require('../assets/images/menu.png')}
                        style={{
                            height:25,
                            width:20,
                            marginTop:60,
                            marginLeft: 25
                        }}
                    />
                </TouchableOpacity>

                <Text style={styles.welcomeText}>
                    Bentornato Enrico,
                </Text>

                <Text style={styles.welcomeWorkText}>
                    Trova il lavoro perfetto
                </Text>

                <View style={styles.searchBox}>
                    <View style={styles.searchInputBox}>
                        <Ionicons name="ios-search" size={24} color="grey" />
                        <TextInput
                            placeholder="Cerca un nuovo lavoro..."
                            placeholderTextColor="gray"
                            style={styles.searchInput}
                        />
                    </View>

                    <View style={styles.location}>
                        <Ionicons name="location-outline" size={24} color="black" />
                    </View>
                </View>

                <Modalize
                    handleStyle={styles.modalButton}
                    modalStyle={styles.modalList}
                    alwaysOpen={550}
                    scrollViewProps={{showsVerticalScrollIndicator:false}}
                >

                    <View style={{
                        flexDirection:"row",
                        width:"100%",
                        alignItems:"center",
                        paddingLeft:20,
                    }}>
                        <Text style={{
                            fontFamily:"MS-Bold",
                            fontSize:18,
                            color:"#4f4a4a"
                        }}>
                            Modern
                        </Text>
                    </View>

                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={{paddingLeft:20}}
                    >
                        <JobItemHorizontal
                            src={require('../assets/images/asana.png')}
                            name="Docker Developer"
                            onPress={()=>navigation.navigate('JobDetails')}

                        />
                        <JobItemHorizontal
                            src={require('../assets/images/asana.png')}
                            name="AWS Architect"
                        />
                        <JobItemHorizontal
                            src={require('../assets/images/asana.png')}
                            name="Flutter Dev"
                        />

                    </ScrollView>

                    <View style={{marginTop:40}}>
                        <JobItem
                            // onPress={()=>this.props.navigation.navigate("Xd")}
                            img={require('../assets/images/asana.png')}
                            title="Software Developer"
                            bg="white"
                        />
                        <JobItem
                            img={require('../assets/images/asana.png')}
                            title="Devops Engineer"
                            bg="white"
                        />
                        <JobItem
                            img={require('../assets/images/asana.png')}
                            title="Flutter Developer"
                            bg="white"
                        />
                        <JobItem
                            img={require('../assets/images/asana.png')}
                            title="UI Designer"
                            bg="white"
                        />
                        <JobItem
                            img={require('../assets/images/asana.png')}
                            title="Java Architect"
                            bg="white"
                        />
                        <JobItem
                            img={require('../assets/images/asana.png')}
                            title="AWS Engineer"
                            bg="white"
                        />
                        <JobItem
                            img={require('../assets/images/asana.png')}
                            title="DB Administrator"
                            bg="white"
                        />
                    </View>
                </Modalize>

            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    imageBackground: {
        width: '100%',
        height: '100%'
    },
    welcomeText: {
        paddingHorizontal: 20,
        fontSize: 14,
        marginTop: 30,
        fontFamily: 'MS-Medium',
        color: 'white'
    },
    welcomeWorkText: {
        paddingHorizontal: 20,
        fontSize: 25,
        marginTop: 10,
        fontFamily: 'MS-Bold',
        color: 'white'
    },
    searchBox: {
        flexDirection:"row",
        alignItems:"center",
        width:"100%",
        padding: 20,
        marginVertical:20
    },
    searchInputBox: {
        flexDirection:"row",
        alignItems:"center",
        width:"85%",
        fontFamily: 'MS-Regular',
        padding:10,
        backgroundColor:"white",
        paddingHorizontal:20,
        borderRadius:10,
    },
    searchInput: {
        fontFamily:"MS-Medium",
        paddingHorizontal:10,
        fontSize:12
    },
    location: {
        alignItems:"center",
        width:"15%",
        backgroundColor:"white",
        borderRadius:10,
        marginLeft:5,
        padding:10,
        justifyContent:"center"
    },
    modalButton: {
        marginTop:30,
        backgroundColor:"#e9e9e9",
        width:80
    },
    modalList: {
        borderTopLeftRadius:60,
        borderTopRightRadius:60,
        paddingTop: 65
    }
})