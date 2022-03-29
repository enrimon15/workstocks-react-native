import React, {useEffect, useState} from 'react';
import { FontAwesome } from '@expo/vector-icons';
import {StringUtils} from "../util/StringUtils";
import AuthLayout from "../components/auth/AuthLayout";
import InputForm from "../components/auth/InputForm";
import {useDispatch, useSelector} from "react-redux";
import {clearError, updateProfile} from "../store/actions/UserAction";
import {sUserData, sUserError, sUserLoading} from "../store/selectors/UserSelector";
import {useNavigation} from "@react-navigation/native";

const Profile = () => {

    const dispatch = useDispatch();
    const loading = useSelector(sUserLoading);
    const error = useSelector(sUserError);
    const user = useSelector(sUserData);
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
        email: user.email,
        name: user.name,
        surname: user.surname,
        isValidEmail: null,
        isValidName: null,
        isValidSurname: null
    });

    const emailChange = (val) => {
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

    const nameChange = (val) => {
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

    const surnameChange = (val) => {
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

    const updateProfileHandle = () => {
        dispatch(updateProfile(data.email, data.name, data.surname));
    }

    return (
        <AuthLayout
            titleText={'Profilo'}
            topButtonTitle={"Salva"}
            topButtonHandler={updateProfileHandle}
            loading={loading}
            error={error}
            errorText={'Modifica non riuscita, riprova!'}
            nav={navigation}
        >
            <InputForm
                title={'Email'}
                placeholder={'Email..'}
                applyValidation={true}
                isPassword={false}
                errorText={'Email non valida'}
                isInputValid={data.isValidEmail}
                changeTextHandler={emailChange}
                initialValue={data.email}
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
                changeTextHandler={nameChange}
                initialValue={data.name}
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
                changeTextHandler={surnameChange}
                initialValue={data.surname}
            >
                <FontAwesome
                    name="user-circle-o"
                    color="#4f4a4a"
                    size={20}
                />
            </InputForm>

        </AuthLayout>
    );
};

export default Profile;