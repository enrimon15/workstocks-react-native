import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { MaterialIcons } from '@expo/vector-icons';
import Colors from "../constants/colors";

const SplashScreen = ({navigation}) => {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Animatable.Image
                    animation="bounceIn"
                    duraton="1500"
                    source={require('../assets/images/logo_con_testo.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />
            </View>
            <Animatable.View
                style={[styles.footer, {
                    backgroundColor: "white"
                }]}
                animation="fadeInUpBig"
            >
                <Text style={[styles.title, {
                    color: "black"
                }]}>Trova l'offerta di lavoro adatta a te!</Text>
                <Text style={styles.text}>Accedi con il tuo account</Text>
                <View style={styles.button}>
                    <TouchableOpacity onPress={()=>navigation.navigate('SignInScreen')}>
                        <TouchableOpacity
                            style={styles.signIn}
                        >
                            <Text style={styles.textSign}>Inizia</Text>
                            <MaterialIcons name="keyboard-arrow-right" size={20} color="white" />
                        </TouchableOpacity>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
};

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontFamily: 'MS-Bold'
    },
    text: {
        color: 'grey',
        marginTop:5,
        fontFamily: "MS-Regular",
        marginVertical: 4
    },
    button: {
        position: 'absolute',
        bottom:80,
        right: 30
        //alignItems: 'flex-end',
        //marginTop: 30
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row',
        backgroundColor: Colors.primary
    },
    textSign: {
        color: 'white',
        fontFamily: 'MS-Medium',
        fontSize: 16
    }
});