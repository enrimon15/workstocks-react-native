import {
    CLEAN_ERROR,
    REINIT_APP_STATE,
    USER_ERROR,
    USER_LOADING,
    USER_LOGOUT,
    USER_SUCCESS,
    USER_UPDATE_SUCCESS
} from "./ActionType";
import HttpApi from "../../util/HttpApi";
import LoginRequest from "../../model/LoginRequest";
import RegisterRequest from "../../model/RegisterRequest";
import User from "../../model/User";

let timerLogout;

export function login(email, password) {
    return async function(dispatch, getState) {

        dispatch({
            type: USER_LOADING
        })

        try{
            const loginRequest = new LoginRequest(email, password);
            const loginResponse = await HttpApi.login(loginRequest);
            dispatch(setLogoutTimer(loginResponse.data.expirationMillis * 1000));

            dispatch({
                type: USER_SUCCESS,
                payload: loginResponse
            })
        }
        catch(e){
            console.log(e)
            dispatch( {
                type: USER_ERROR,
            })
        }
    };
}

export function register(email, name, surname, password, passwordConfirmation) {
    return async function(dispatch, getState) {
        dispatch({
            type:USER_LOADING,
        })

        try{
            const registrationRequest = new RegisterRequest(email, name, surname, password, passwordConfirmation);
            await HttpApi.register(registrationRequest);

            dispatch(login(email, password));
        }
        catch(e){
            console.log(e)
            dispatch( {
                type: USER_ERROR
            })
        }
    };
}

export function updateProfile(email, name, surname) {
    return async function(dispatch, getState) {
        dispatch({
            type:USER_LOADING,
        })

        try{
            const userRequest = new User(name, surname, email);
            await HttpApi.updateProfile(userRequest);

            dispatch({
                type: USER_UPDATE_SUCCESS,
                payload: userRequest
            })
        }
        catch(e){
            console.log(e)
            dispatch( {
                type: USER_ERROR,
            })
        }
    };
}

export function logout() {
    return function(dispatch, getState) {
        clearLogoutTimer();

        dispatch({
            type: USER_LOGOUT
        })

        dispatch({
            type: REINIT_APP_STATE
        })
    };
}

function clearLogoutTimer() {
    if (timerLogout) {
        clearTimeout(timerLogout);
    }
}

function setLogoutTimer(expirationTime) {
    return function(dispatch, getState) {
        timerLogout = setTimeout(() => {
            dispatch(logout());
        }, expirationTime);
    }
}

export function clearError() {
    return {
        type: CLEAN_ERROR
    };
}