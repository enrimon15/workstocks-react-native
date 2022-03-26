import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    ActivityIndicator
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Colors from "../../constants/colors";
import ErrorForm from "./ErrorForm";

const AuthLayout = ({titleText, children, topButtonTitle, topButtonHandler, bottomButtonTitle, bottomButtonHandler,
                        loading, error, errorText}) => {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text_header}>{titleText}</Text>
            </View>
            <Animatable.View
                animation="fadeInUpBig"
                style={[styles.footer, {
                    backgroundColor: "white"
                }]}
            >
                <ScrollView showsVerticalScrollIndicator={false}>

                    {error && <ErrorForm text={errorText} />}

                    {children}

                    <View style={styles.button}>
                        <TouchableOpacity
                            style={[styles.signIn, {
                                backgroundColor: Colors.primary,
                                marginTop: 15
                            }]}
                            onPress={!loading ? topButtonHandler: null}
                        >
                            {!loading ? (
                                <View style={{color: Colors.primary}}>
                                    <Text style={[styles.textSign, {
                                        color:"white"
                                    }]}>{topButtonTitle}</Text>
                                </View>
                            ) : (
                                <ActivityIndicator color="white"/>
                            )}
                        </TouchableOpacity>

                        {bottomButtonTitle && <TouchableOpacity
                            onPress={bottomButtonHandler}
                            style={[styles.signIn, {
                                borderColor: Colors.primary,
                                borderWidth: 1,
                                marginTop: 15
                            }]}
                        >
                            <Text style={[styles.textSign, {
                                color: Colors.primary
                            }]}>{bottomButtonTitle}</Text>
                        </TouchableOpacity>}
                    </View>

                </ScrollView>
            </Animatable.View>
        </View>
    );
};

export default AuthLayout;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: 'white',
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
        color: Colors.primary
    },
    textSign: {
        fontSize: 18,
        fontFamily: 'MS-Medium'
    }
});