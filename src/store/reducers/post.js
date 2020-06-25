import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    loading: false,
    error: null,
    uploaded: false,
    code: ``
}

const newPostStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true,
        uploaded: false
    })
}

const newPostSuccess = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: false,
        uploaded: true
    })
}

const newPostFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false,
        uploaded: false
    })
}

const updateCodeStart = (state, action) => {
    return updateObject(state, {
        code: action.code
    })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.NEW_POST_START: return newPostStart(state, action);
        case actionTypes.NEW_POST_SUCCESS: return newPostSuccess(state, action);
        case actionTypes.NEW_POST_FAIL: return newPostFail(state, action);
        case actionTypes.UPDATE_CODE: return updateCodeStart(state, action);
        default:
            return state;
    }
}

export default reducer;