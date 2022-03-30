import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    ActivityIndicator,
    SafeAreaView
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import ErrorForm from "./ErrorForm";
import Back from "../nav/Back";
import {Colors} from "../../constants/colors";

export default function AuthLayout({titleText, children, topButtonTitle, topButtonHandler, bottomButtonTitle,
                                       bottomButtonHandler, loading, error, errorText, nav}) {

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <SafeAreaView>
                    {nav && <Back navigation={nav} iconColor={"white"}/>}
                </SafeAreaView>

                <Text style={styles.text_header}>{titleText}</Text>
            </View>

            <Animatable.View
                animation="fadeInUpBig"
                style={styles.footer}
            >
                <ScrollView showsVerticalScrollIndicator={false}>

                    {error && <ErrorForm text={errorText}/>}

                    {children}

                    <View style={styles.button}>
                        <TouchableOpacity
                            style={styles.signIn}
                            onPress={!loading ? topButtonHandler : null}
                        >
                            {!loading ? (
                                <View style={styles.colorPrimary}>
                                    <Text style={styles.textSign}>{topButtonTitle}</Text>
                                </View>
                            ) : (
                                <ActivityIndicator color={Colors.light}/>
                            )}
                        </TouchableOpacity>

                        {bottomButtonTitle && <TouchableOpacity
                            onPress={bottomButtonHandler}
                            style={[styles.signIn, styles.secondSignIn]}
                        >
                            <Text style={[styles.textSign, styles.colorPrimary]}>{bottomButtonTitle}</Text>
                        </TouchableOpacity>}
                    </View>

                </ScrollView>
            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary
    },
    header: {
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: Colors.light,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: Colors.light,
        fontFamily: 'MS-Bold',
        fontSize: 30,
        marginLeft: 5
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        color: Colors.primary,
        marginTop: 15
    },
    secondSignIn: {
        borderColor: Colors.primary,
        borderWidth: 1
    },
    textSign: {
        fontSize: 18,
        fontFamily: 'MS-Medium',
        color: Colors.light
    },
    colorPrimary: {color: Colors.primary}
});