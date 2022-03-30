import React, {useEffect, useState} from 'react';
import { FontAwesome, Feather } from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {clearError, login} from "../store/actions/UserAction";
import {sUserError, sUserLoading} from "../store/selectors/UserSelector";
import AuthLayout from "../components/auth/AuthLayout";
import InputForm from "../components/auth/InputForm";
import {StringUtils} from "../util/StringUtils";
import {Routes} from "../constants/routes";
import {Colors} from "../constants/colors";

export default function Login() {
    const { t } = useTranslation();
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const loading = useSelector(sUserLoading);
    const error = useSelector(sUserError);

    useEffect(() => {
        // quando lo screen perde il focus rimuovo l'errore
        const navigationFocusListener = navigation.addListener('beforeRemove', () => {
            if (error) {
                dispatch(clearError());
            }
        });

        // Ritorno la function per fare l'unsubscribe quando ho un unmount dello schermo
        return navigationFocusListener;
    }, []);

    const [data, setData] = useState({
        email: '',
        password: '',
        secureTextEntry: true,
        isValidEmail: null
    });

    const handleEmailChange = (val) => {
        const isValidEmail = StringUtils.validateEmail(val);
        setData({
            ...data,
            email: val,
            isValidEmail: isValidEmail
        });
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
        dispatch(login(data.email, data.password));
    }

    return (
        <AuthLayout
            titleText={t('auth.welcome')}
            topButtonTitle={t('auth.login')}
            topButtonHandler={loginHandle}
            bottomButtonTitle={t('auth.register')}
            bottomButtonHandler={() => navigation.navigate(Routes.register)}
            loading={loading}
            error={error}
            errorText={t('auth.errorLogin')}
        >

            <InputForm
                title={t('auth.email')}
                placeholder={t('auth.email') + '..'}
                applyValidation={true}
                errorText={t('auth.emailError')}
                isInputValid={data.isValidEmail}
                changeTextHandler={handleEmailChange}
            >
                <FontAwesome
                    name="envelope-o"
                    color={Colors.darkGray}
                    size={20}
                />
            </InputForm>

            <InputForm
                containerStyle={{marginTop: 25}}
                title={t('auth.password')}
                placeholder={t('auth.password') + '..'}
                applyValidation={false}
                changeTextHandler={handlePasswordChange}
                isPassword={true}
                secureTextEntry={data.secureTextEntry}
                updateSecureTextEntry={updateSecureTextEntry}
            >
                <Feather
                    name="lock"
                    color={Colors.darkGray}
                    size={20}
                />
            </InputForm>

        </AuthLayout>
    );
};