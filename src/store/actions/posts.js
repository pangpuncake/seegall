import * as actionTypes from './actionTypes';
import axios from 'axios';

export const fetchPostsStart = () => {
    return {
        type: actionTypes.FETCH_POSTS_START
    }
}

export const fetchPostsSuccess = (posts) => {
    return {
        type: actionTypes.FETCH_POSTS_SUCCESS,
        posts: posts
    }
}

export const fetchPostsFail = (error) => {
    return {
        type: actionTypes.FETCH_POSTS_FAIL,
        error: error
    }
}

export const fetchPosts = () => {
    return dispatch => {
        dispatch(fetchPostsSuccess());
        axios.get('https://seegall-d5efa.firebaseio.com/posts.json')
            .then( res => {
                const fetchedPosts = [];
                for ( let key in res.data ) {
                    fetchedPosts.push( {
                        ...res.data[key],
                        id: key
                    } );
                }
                dispatch(fetchPostsSuccess(fetchedPosts));
            } )
            .catch( err => {
                dispatch(fetchPostsFail(err));
            } );
    }
}