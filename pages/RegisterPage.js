import React, {useEffect, useState} from 'react';
import { FontAwesome, Feather } from '@expo/vector-icons';
import {StringUtils} from "../util/StringUtils";
import AuthLayout from "../components/auth/AuthLayout";
import InputForm from "../components/auth/InputForm";
import {useDispatch, useSelector} from "react-redux";
import {clearError, register} from "../store/actions/UserAction";
import {sUserError, sUserLoading} from "../store/selectors/UserSelector";
import {useNavigation} from "@react-navigation/native";

const Register = () => {

    const dispatch = useDispatch();
    const loading = useSelector(sUserLoading);
    const error = useSelector(sUserError);
    const navigation = useNavigation();

    useEffect(() => {
        // quando lo screen perde il focus
        const navigationFocusListener = navigation.addListener('beforeRemove', () => {
            if (error) {
                dispatch(clearError());
            }
        });

        // Ritorno la function per fare l'unsibscribe quando ho un unmount dello schermo
        return navigationFocusListener;
    }, []);

    const [data, setData] = useState({
        email: '',
        name: '',
        surname: '',
        password: '',
        confirmPassword: '',
        secureTextEntry: true,
        secureTextEntryConfirm: true,
        isValidEmail: null,
        isValidName: null,
        isValidSurname: null,
        isValidPassword: null,
        isValidConfirmPassword: null
    });

    const handleEmailChange = (val) => {
        let emailValid = false;
        if(StringUtils.validateEmail(val)) {
            emailValid = true;
        }

        setData({
            ...data,
            email: val,
            isValidEmail: emailValid
        });
    }

    const handleNameChange = (val) => {
        let nameValid = false;
        if(StringUtils.isLengthInRange(val, 2, 15)) {
            nameValid = true;
        }

        setData({
            ...data,
            name: val,
            isValidName: nameValid
        });
    }

    const handleSurnameChange = (val) => {
        let surnameValid = false;
        if(StringUtils.isLengthInRange(val, 2, 15)) {
            surnameValid = true;
        }

        setData({
            ...data,
            surname: val,
            isValidSurname: surnameValid
        });
    }

    const handleConfirmPasswordChange = (val) => {
        let confirmPwValid = false;
        if(StringUtils.validateConfirmPassword(val, data.password)) {
            confirmPwValid = true;
        }

        setData({
            ...data,
            confirmPassword: val,
            isValidConfirmPassword: confirmPwValid
        });
    }

    const handlePasswordChange = (val) => {
        let pwValid = false;
        if(StringUtils.validatePassword(val)) {
            pwValid = true;
        }

        setData({
            ...data,
            password: val,
            isValidPassword: pwValid
        });
    }

    const updateSecureTextEntry = (type) => {
        if (type === 'CONFIRM_PASSWORD') {
            setData({
                ...data,
                secureTextEntryConfirm: !data.secureTextEntryConfirm
            });
        } else {
            setData({
                ...data,
                secureTextEntry: !data.secureTextEntry
            });
        }
    }

    const registerHandle = () => {
        dispatch(register(data.email, data.name, data.surname, data.password, data.confirmPassword));
    }

    return (
        <AuthLayout
            titleText={'Registrati!'}
            topButtonTitle={"Registrati"}
            topButtonHandler={registerHandle}
            loading={loading}
            error={error}
            errorText={'Registrazione non riuscita, riprova!'}
            nav={navigation}
        >
            <InputForm
                title={'Email'}
                placeholder={'Email..'}
                applyValidation={true}
                isPassword={false}
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
                title={'Nome'}
                placeholder={'Nome..'}
                applyValidation={true}
                isPassword={false}
                errorText={'Nome non valido'}
                isInputValid={data.isValidName}
                changeTextHandler={handleNameChange}
            >
                <FontAwesome
                    name="user-o"
                    color="#4f4a4a"
                    size={20}
                />
            </InputForm>

            <InputForm
                containerStyle={{marginTop: 25}}
                title={'Cognome'}
                placeholder={'Cognome..'}
                applyValidation={true}
                isPassword={false}
                errorText={'Cognome non valido'}
                isInputValid={data.isValidSurname}
                changeTextHandler={handleSurnameChange}
            >
                <FontAwesome
                    name="user-circle-o"
                    color="#4f4a4a"
                    size={20}
                />
            </InputForm>

            <InputForm
                containerStyle={{marginTop: 25}}
                title={'Password'}
                placeholder={'Password..'}
                applyValidation={true}
                errorText={'Password non valida'}
                isInputValid={data.isValidPassword}
                changeTextHandler={handlePasswordChange}
                isPassword={true}
                secureTextEntry={data.secureTextEntry}
                updateSecureTextEntry={() => updateSecureTextEntry('PASSWORD')}
            >
                <Feather
                    name="lock"
                    color="#4f4a4a"
                    size={20}
                />
            </InputForm>

            <InputForm
                containerStyle={{marginTop: 25}}
                title={'Conferma Password'}
                placeholder={'Conferma Password..'}
                applyValidation={true}
                errorText={'La password non coincide'}
                isInputValid={data.isValidConfirmPassword}
                changeTextHandler={handleConfirmPasswordChange}
                isPassword={true}
                secureTextEntry={data.secureTextEntryConfirm}
                updateSecureTextEntry={() => updateSecureTextEntry('CONFIRM_PASSWORD')}
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

export default Register;