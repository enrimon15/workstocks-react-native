import React, {useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { FontAwesome, Feather } from '@expo/vector-icons';
import Colors from "../constants/colors";
import {StringUtils} from "../util/StringUtils";

const Login = ({navigation}) => {

    const [data, setData] = useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidEmail: true,
        isValidPassword: true,
    });

    //const { signIn } = React.useContext(AuthContext);

    const textInputChange = (val) => {
        if( StringUtils.validateEmail(val)) {
            setData({
                ...data,
                email: val,
                check_textInputChange: true,
                isValidEmail: true
            });
        } else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false,
                isValidEmail: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val,
            isValidPassword: true
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const loginHandle = (email, password) => {
        console.log("login: " + email + " - " + password);
        //signIn(foundUser);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text_header}>Benvenuto!</Text>
            </View>
            <Animatable.View
                animation="fadeInUpBig"
                style={[styles.footer, {
                    backgroundColor: "white"
                }]}
            >
                <Text style={[styles.text_footer, {
                    color: "black"
                }]}>Email</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="user-o"
                        color="#4f4a4a"
                        size={20}
                    />
                    <TextInput
                        // mettere tastiera email
                        placeholder="Email.."
                        placeholderTextColor="gray"
                        style={[styles.textInput, {
                            color: "black"
                        }]}
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={(val) => textInputChange(val)}
                    />
                    {data.check_textInputChange ?
                        <Animatable.View
                            animation="bounceIn"
                        >
                            <Feather
                                name="check-circle"
                                color="green"
                                size={20}
                            />
                        </Animatable.View>
                        : null}
                </View>
                { data.isValidEmail ? null :
                    <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={styles.errorMsg}>Email non valida</Text>
                    </Animatable.View>
                }


                <Text style={[styles.text_footer, {
                    color: "black",
                    marginTop: 35
                }]}>Password</Text>
                <View style={styles.action}>
                    <Feather
                        name="lock"
                        color="#4f4a4a"
                        size={20}
                    />
                    <TextInput
                        placeholder="Password.."
                        placeholderTextColor="gray"
                        secureTextEntry={data.secureTextEntry ? true : false}
                        style={[styles.textInput, {
                            color: "black"
                        }]}
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={(val) => handlePasswordChange(val)}
                    />
                    <TouchableOpacity
                        onPress={updateSecureTextEntry}
                    >
                        {data.secureTextEntry ?
                            <Feather
                                name="eye-off"
                                color="grey"
                                size={20}
                            />
                            :
                            <Feather
                                name="eye"
                                color="grey"
                                size={20}
                            />
                        }
                    </TouchableOpacity>
                </View>

                <View style={styles.button}>
                    <TouchableOpacity
                        style={[styles.signIn, {
                            backgroundColor: Colors.primary,
                            marginTop: 15
                        }]}
                        onPress={() => {loginHandle( data.email, data.password )}}
                    >
                        <View style={{color: Colors.primary}}>
                        <Text style={[styles.textSign, {
                            color:"white"
                        }]}>Sign In</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('SignUpScreen')}
                        style={[styles.signIn, {
                            borderColor: Colors.primary,
                            borderWidth: 1,
                            marginTop: 15
                        }]}
                    >
                        <Text style={[styles.textSign, {
                            color: Colors.primary
                        }]}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
};

export default Login;

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
    text_footer: {
        color: '#4f4a4a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
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