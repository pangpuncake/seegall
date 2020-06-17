import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    loading: false,
    error: null,
    loadedPost: null,
    id: null
}

const fullPostStart = ( state, action ) => {
    return updateObject( state, {
        error: null,
        loading: true,
    })
}

const fullPostSuccess = ( state, action ) => {
    return updateObject( state, {
        error: null,
        loading: false,
        loadedPost: action.loadedPost,
        id: action.id
    })
}

const fullPostFail = ( state, action ) => {
    return updateObject( state, {
        error: action.error,
        loading: false,
    })
}

const responseStart = ( state, action ) => {
    return updateObject( state, {
        error: null,
        // loading: true,
    })
}

const responseSuccess = ( state, action ) => {
    return updateObject( state, {
        error: null,
        // loading: false,
    })
}

const responseFail = ( state, action ) => {
    return updateObject( state, {
        error: action.error,
        // loading: false,
    })
}

const deleteResponseStart = ( state, action ) => {
    return updateObject( state, {
        error: null,
        // loading: true,
    })
}

const deleteResponseSuccess = ( state, action ) => {
    return updateObject( state, {
        error: null,
        loadedPost: null,
        id: null
    })
}

const deleteResponseFail = ( state, action ) => {
    return updateObject( state, {
        error: action.error,
        // loading: false,
    })
}

const deletePostStart = ( state, action ) => {
    return updateObject( state, {
        type: actionTypes.DELETE_POST_START
    })
}

const deletePostSuccess = (state, action) => {
    return updateObject( state, {
        type: actionTypes.DELETE_POST_SUCCESS,
        loadedPost: null,
        id: null
    })
}

const deletePostFail = ( state, action ) => {
    return updateObject( state, {
        type: actionTypes.DELETE_POST_FAIL,
        error: action.error
    })
}

const reducer = ( state = initialState, action ) => {
    switch( action.type ) {
        case actionTypes.FULL_POST_START: return fullPostStart(state, action);
        case actionTypes.FULL_POST_SUCCESS: return fullPostSuccess(state, action);
        case actionTypes.FULL_POST_FAIL: return fullPostFail(state, action);

        case actionTypes.RESPONSE_START: return responseStart(state, action);
        case actionTypes.RESPONSE_SUCCESS: return responseSuccess(state, action);
        case actionTypes.RESPONSE_FAIL: return responseFail(state, action);

        case actionTypes.DELETE_RESPONSE_START: return deleteResponseStart(state, action);
        case actionTypes.DELETE_RESPONSE_SUCCESS: return deleteResponseSuccess(state, action);
        case actionTypes.DELETE_RESPONSE_FAIL: return deleteResponseFail(state, action);

        case actionTypes.DELETE_POST_START: return deletePostStart(state, action);
        case actionTypes.DELETE_POST_SUCCESS: return deletePostSuccess(state, action);
        case actionTypes.DELETE_POST_FAIL: return deletePostFail(state, action);

        default:
            return state;
    }
}

export default reducer;