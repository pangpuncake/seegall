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

export const submitPost = (email, value) => {
    console.log(email);
    return dispatch => {
        dispatch(newPostStart());
        const postData = {
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

