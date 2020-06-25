import * as actionTypes from './actionTypes';
import axios from 'axios';

export const newPostStart = () => {
    return {
        type: actionTypes.NEW_POST_START
    }
}

export const newPostSuccess = () => {
    return {
        type: actionTypes.NEW_POST_SUCCESS
    }
}

export const newPostFail = (error) => {
    return {
        type: actionTypes.NEW_POST_FAIL,
        error: error
    }
}

export const updateCodeStart = (code) => {
    return {
        type: actionTypes.UPDATE_CODE,
        code: code
    }
}

export const submitPost = (email, code, value) => {
    console.log(email);
    return dispatch => {
        dispatch(newPostStart());
        const postData = {
            code: code,
            question: value,
            email: email,
        }
        axios.post('https://seegall-d5efa.firebaseio.com/posts.json', postData)
            .then(response => {
                console.log(response.data);
                dispatch(newPostSuccess());
            })
            .catch(error => {
                console.log(error)
                dispatch(newPostFail(error.response.data.error));
            })
    }
}

export const updateCode = (code) => {
    return dispatch => {
        dispatch(updateCodeStart(code));
    }
}

