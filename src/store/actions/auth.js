import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (authData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        authData: authData
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const authResetPassword = () => {
    return {
        type: actionTypes.AUTH_RESET,
    }
}

export const logout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const checkAuthTimeout = (expiryTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expiryTime * 1000)
    };
};

export const resetPassword = (email) => {
    return dispatch => {
        const authData = {
            requestType: 'PASSWORD_RESET',
            email: email
        };
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyAVvsjZWhHgoi8-Dff1l_AoRmEln0l1eQQ';
        axios.post(url, authData)
            .then(response => {
                console.log(response);
                dispatch(authResetPassword());
            })
            .catch(err => {
                console.log(err);
                dispatch(authFail(err.response.data.error));
            })
    }
}

export const auth = (email, password, isSignup) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAVvsjZWhHgoi8-Dff1l_AoRmEln0l1eQQ';
        if (!isSignup) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAVvsjZWhHgoi8-Dff1l_AoRmEln0l1eQQ';
        }
        axios.post(url, authData)
            .then(response => {
                console.log(response);
                dispatch(authSuccess(response.data.idToken, response.data.localId));
                dispatch(checkAuthTimeout(response.data.expiresIn));
            })
            .catch(err => {
                console.log(err);
                dispatch(authFail(err.response.data.error));
            });
    };
};