import React, {useEffect, useState} from 'react';
import { FontAwesome, Feather } from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {clearError, register} from "../store/actions/UserAction";
import {sUserError, sUserLoading} from "../store/selectors/UserSelector";
import AuthLayout from "../components/auth/AuthLayout";
import InputForm from "../components/auth/InputForm";
import * as StringUtils from "../util/StringUtils";
import {Colors} from "../constants/colors";

export default function Register() {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const loading = useSelector(sUserLoading);
    const error = useSelector(sUserError);
    const navigation = useNavigation();

    useEffect(() => {
        // quando lo screen prende il focus rimuovo l'errore
        const navigationFocusListener = navigation.addListener('focus', () => {
            if (error) {
                dispatch(clearError());
            }
        });

        // Ritorno la function per fare l'unsubscribe quando ho un unmount dello schermo
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
        const emailValid = StringUtils.validateEmail(val);
        setData({
            ...data,
            email: val,
            isValidEmail: emailValid
        });
    }

    const handleNameChange = (val) => {
        const nameValid = StringUtils.isLengthInRange(val, 2, 15);
        setData({
            ...data,
            name: val,
            isValidName: nameValid
        });
    }

    const handleSurnameChange = (val) => {
        const surnameValid = StringUtils.isLengthInRange(val, 2, 15);
        setData({
            ...data,
            surname: val,
            isValidSurname: surnameValid
        });
    }

    const handleConfirmPasswordChange = (val) => {
        const confirmPwValid = StringUtils.validateConfirmPassword(val, data.password);
        setData({
            ...data,
            confirmPassword: val,
            isValidConfirmPassword: confirmPwValid
        });
    }

    const handlePasswordChange = (val) => {
        const pwValid = StringUtils.validatePassword(val);
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
            titleText={t('auth.register') + '!'}
            topButtonTitle={t('auth.register')}
            topButtonHandler={registerHandle}
            loading={loading}
            error={error}
            errorText={t('auth.errorRegister')}
            nav={navigation}
        >
            <InputForm
                title={t('auth.email')}
                placeholder={t('auth.email') + '..'}
                applyValidation={true}
                isPassword={false}
                errorText={t('auth.emailError')}
                isInputValid={data.isValidEmail}
                changeTextHandler={handleEmailChange}
            >
                <FontAwesome name="envelope-o" color={Colors.darkGray} size={20}/>
            </InputForm>

            <InputForm
                containerStyle={{marginTop: 25}}
                title={t('auth.name')}
                placeholder={t('auth.name') + '..'}
                applyValidation={true}
                isPassword={false}
                errorText={t('auth.nameError')}
                isInputValid={data.isValidName}
                changeTextHandler={handleNameChange}
            >
                <FontAwesome name="user-o" color={Colors.darkGray} size={20}/>
            </InputForm>

            <InputForm
                containerStyle={{marginTop: 25}}
                title={t('auth.surname')}
                placeholder={t('auth.surname') + '..'}
                applyValidation={true}
                isPassword={false}
                errorText={t('auth.surnameError')}
                isInputValid={data.isValidSurname}
                changeTextHandler={handleSurnameChange}
            >
                <FontAwesome name="user-circle-o" color={Colors.darkGray} size={20}/>
            </InputForm>

            <InputForm
                containerStyle={{marginTop: 25}}
                title={t('auth.password')}
                placeholder={t('auth.password') + '..'}
                applyValidation={true}
                errorText={t('auth.passwordError')}
                isInputValid={data.isValidPassword}
                changeTextHandler={handlePasswordChange}
                isPassword={true}
                secureTextEntry={data.secureTextEntry}
                updateSecureTextEntry={() => updateSecureTextEntry('PASSWORD')}
            >
                <Feather name="lock" color={Colors.darkGray} size={20}/>
            </InputForm>

            <InputForm
                containerStyle={{marginTop: 25}}
                title={t('auth.passwordConfirm')}
                placeholder={t('auth.passwordConfirm') + '..'}
                applyValidation={true}
                errorText={t('auth.passwordConfirmError')}
                isInputValid={data.isValidConfirmPassword}
                changeTextHandler={handleConfirmPasswordChange}
                isPassword={true}
                secureTextEntry={data.secureTextEntryConfirm}
                updateSecureTextEntry={() => updateSecureTextEntry('CONFIRM_PASSWORD')}
            >
                <Feather name="lock" color={Colors.darkGray} size={20}/>
            </InputForm>

        </AuthLayout>
    );
};