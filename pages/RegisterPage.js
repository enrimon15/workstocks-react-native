import React, {useState} from 'react';
import { FontAwesome, Feather } from '@expo/vector-icons';
import {StringUtils} from "../util/StringUtils";
import AuthLayout from "../components/auth/AuthLayout";
import InputForm from "../components/auth/InputForm";
import {useDispatch, useSelector} from "react-redux";
import {register} from "../store/actions/UserAction";
import {sUserLoading} from "../store/selectors/UserSelector";

const Register = () => {

    const dispatch = useDispatch();
    const loading = useSelector(sUserLoading);

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

    const handleNameChange = (val) => {
        if( StringUtils.isLengthInRange(val, 2, 15)) {
            setData({
                ...data,
                name: val,
                isValidName: true
            });
        } else {
            setData({
                ...data,
                name: val,
                isValidName: false
            });
        }
    }

    const handleSurnameChange = (val) => {
        if( StringUtils.isLengthInRange(val, 2, 15)) {
            setData({
                ...data,
                surname: val,
                isValidSurname: true
            });
        } else {
            setData({
                ...data,
                surname: val,
                isValidSurname: false
            });
        }
    }

    const handleConfirmPasswordChange = (val) => {
        if( StringUtils.validateConfirmPassword(val, data.password)) {
            setData({
                ...data,
                confirmPassword: val,
                isValidConfirmPassword: true
            });
        } else {
            setData({
                ...data,
                confirmPassword: val,
                isValidConfirmPassword: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        if (StringUtils.validatePassword(val)) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
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
        console.log("register: " + data.email + " - " + data.password + " - " + data.confirmPassword + " - " + data.surname + " - " + data.name );
        dispatch(register(data.email, data.name, data.surname, data.password));
    }

    return (
        <AuthLayout
            titleText={'Registrati!'}
            topButtonTitle={"Registrati"}
            topButtonHandler={registerHandle}
            loading={loading}
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