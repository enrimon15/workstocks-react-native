import React, {useEffect, useState} from 'react';
import { FontAwesome } from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {clearError, updateProfile} from "../store/actions/UserAction";
import {sUserData, sUserError, sUserLoading} from "../store/selectors/UserSelector";
import AuthLayout from "../components/auth/AuthLayout";
import InputForm from "../components/auth/InputForm";
import {StringUtils} from "../util/StringUtils";
import {Colors} from "../constants/colors";

export default function Profile() {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const loading = useSelector(sUserLoading);
    const error = useSelector(sUserError);
    const user = useSelector(sUserData);
    const navigation = useNavigation();

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
        email: user.email,
        name: user.name,
        surname: user.surname,
        isValidEmail: null,
        isValidName: null,
        isValidSurname: null
    });

    const emailChange = (val) => {
        const emailValid = StringUtils.validateEmail(val);
        setData({
            ...data,
            email: val,
            isValidEmail: emailValid
        });
    }

    const nameChange = (val) => {
        const nameValid = StringUtils.isLengthInRange(val, 2, 15);
        setData({
            ...data,
            name: val,
            isValidName: nameValid
        });
    }

    const surnameChange = (val) => {
        const surnameValid = StringUtils.isLengthInRange(val, 2, 15);
        setData({
            ...data,
            surname: val,
            isValidSurname: surnameValid
        });
    }

    const updateProfileHandle = () => {
        dispatch(updateProfile(data.email, data.name, data.surname));
    }

    return (
        <AuthLayout
            titleText={t('auth.profile')}
            topButtonTitle={t('auth.save')}
            topButtonHandler={updateProfileHandle}
            loading={loading}
            error={error}
            errorText={t('auth.errorUpdate')}
            nav={navigation}
        >

            <InputForm
                title={t('auth.email')}
                placeholder={t('auth.email') + '..'}
                applyValidation={true}
                isPassword={false}
                errorText={t('auth.emailError')}
                isInputValid={data.isValidEmail}
                changeTextHandler={emailChange}
                initialValue={data.email}
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
                changeTextHandler={nameChange}
                initialValue={data.name}
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
                changeTextHandler={surnameChange}
                initialValue={data.surname}
            >
                <FontAwesome name="user-circle-o" color={Colors.darkGray} size={20}/>
            </InputForm>

        </AuthLayout>
    );
};