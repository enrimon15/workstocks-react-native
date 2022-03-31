import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet
} from 'react-native';
import {useTranslation} from "react-i18next";
import * as Animatable from 'react-native-animatable';
import {MaterialIcons} from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native";
import {Colors} from "../constants/colors";
import {Routes} from "../constants/routes";
import {LogoTesto} from '../constants/images';

export default function SplashScreen() {
    const { t } = useTranslation();
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Animatable.Image
                    animation="bounceIn"
                    duraton="1500"
                    source={LogoTesto}
                    style={styles.logo}
                    resizeMode="contain"
                />
            </View>
            <Animatable.View
                style={styles.footer}
                animation="fadeInUpBig"
            >
                <Text style={styles.title}>{t('splash.overview')}</Text>
                <Text style={styles.text}>{t('splash.signIn')}</Text>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => navigation.navigate(Routes.login)}>
                        <View
                            style={styles.signIn}
                        >
                            <Text style={styles.textSign}>{t('splash.start')}</Text>
                            <MaterialIcons name="keyboard-arrow-right" size={20} color={Colors.light}/>
                        </View>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
};

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
        backgroundColor: Colors.light,
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
        color: Colors.dark,
        fontSize: 30,
        fontFamily: 'MS-Bold'
    },
    text: {
        color: 'grey',
        marginTop: 5,
        fontFamily: "MS-Regular",
        marginVertical: 4
    },
    button: {
        position: 'absolute',
        bottom: 80,
        right: 30
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
        color: Colors.light,
        fontFamily: 'MS-Medium',
        fontSize: 16
    }
});