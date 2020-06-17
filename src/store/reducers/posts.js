import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    loading: false,
    error: null,
    posts: []
}

const fetchPostsStart = ( state, action ) => {
    return updateObject( state, {
        loading: true
    })
}

const fetchPostsSuccess = ( state, action ) => {
    return updateObject( state, {
        loading: false,
        posts: action.posts
    })
}

const fetchPostsFail = ( state, action ) => {
    return updateObject( state, {
        loading: false,
        error: action.error
    })
}

const reducer = ( state = initialState, action ) => {
    switch( action.type ) {
        case actionTypes.FETCH_POSTS_START: return fetchPostsStart(state, action);
        case actionTypes.FETCH_POSTS_SUCCESS: return fetchPostsSuccess(state, action);
        case actionTypes.FETCH_POSTS_FAIL: return fetchPostsFail(state, action);
        default:
            return state;
    }
}

export default reducer;