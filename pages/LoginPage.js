import React, {useState} from 'react';
import { FontAwesome, Feather } from '@expo/vector-icons';
import {StringUtils} from "../util/StringUtils";
import {useNavigation} from "@react-navigation/native";
import AuthLayout from "../components/auth/AuthLayout";
import InputForm from "../components/auth/InputForm";

const Login = () => {

    const navigation = useNavigation();

    const [data, setData] = useState({
        email: '',
        password: '',
        secureTextEntry: true,
        isValidEmail: null
    });

    const handleEmailChange = (val) => {
        if( StringUtils.validateEmail(val)) {
            setData({
                ...data,
                email: val,
                isValidEmail: true
            });
        } else {
            setData({
                ...data,
                email: val,
                isValidEmail: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const loginHandle = () => {
        console.log("login: " + data.email + " - " + data.password);
        //signIn(foundUser);
    }

    return (
        <AuthLayout
            titleText={'Benvenuto!'}
            topButtonTitle={"Login"}
            topButtonHandler={loginHandle}
            bottomButtonTitle={'Registrati'}
            bottomButtonHandler={() => navigation.navigate('Register')}
        >

            <InputForm
                title={'Email'}
                placeholder={'Email..'}
                applyValidation={true}
                errorText={'Email non valida'}
                isInputValid={data.isValidEmail}
                changeTextHandler={handleEmailChange}
            >
                <FontAwesome
                    name="envelope-o"
                    color="#4f4a4a"
                    size={20}
                />
            </InputForm>

            <InputForm
                containerStyle={{marginTop: 25}}
                title={'Password'}
                placeholder={'Password..'}
                applyValidation={false}
                changeTextHandler={handlePasswordChange}
                isPassword={true}
                secureTextEntry={data.secureTextEntry}
                updateSecureTextEntry={updateSecureTextEntry}
            >
                <Feather
                    name="lock"
                    color="#4f4a4a"
                    size={20}
                />
            </InputForm>

        </AuthLayout>
    );
};

export default Login;