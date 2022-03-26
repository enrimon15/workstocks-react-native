import {USER, USER_ERROR, USER_LOADING, USER_LOGOUT, USER_SUCCESS} from "./ActionType";
import HttpApi from "../../util/HttpApi";
import LoginRequest from "../../model/LoginRequest";
import RegisterRequest from "../../model/RegisterRequest";

export function login(email, password) {
    return async function(dispatch, getState) {
        const loginRequest = new LoginRequest(email, password);

        dispatch({
            type: USER,
            payload: HttpApi.login(loginRequest)
        })
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

            const loginRequest = new LoginRequest(email, password);
            const loginRes = await HttpApi.login(loginRequest);

            dispatch({
                type: USER_SUCCESS,
                payload: loginRes
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
    return {
        type: USER_LOGOUT
    };
}