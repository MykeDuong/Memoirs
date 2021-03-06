import * as api from '../api';
import { FETCH_ALL, FETCH_BY_SEARCH, FETCH_POST, CREATE, UPDATE, DELETE, LIKE, COMMENT, START_LOADING, END_LOADING } from '../constants/actionTypes';

// Action Creators
export const getPosts = (page) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.fetchPosts(page);
        const action = {
            type: FETCH_ALL,
            payload: data
        }
        dispatch(action);
        dispatch({ type: END_LOADING });
    } catch (err) {console.log(err.response.data);}
}

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data: { data } } = await api.fetchPostsBySearch(searchQuery);
        dispatch({ type: FETCH_BY_SEARCH, payload: data });
        dispatch({ type: END_LOADING });
    } catch (err) {
        console.log(err);
    }
}

export const getPost = (id) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.fetchPost(id);
        const action = {
            type: FETCH_POST,
            payload: data
        }
        dispatch(action);
        dispatch({ type: END_LOADING });
    } catch (err) {console.log(err.response.data);}
}

export const createPost = (post, navigate) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        const action = {
            type: CREATE,
            payload: data
        }
        navigate(`${data._id}`);
        dispatch(action);
    } catch (err) {console.log(err);}
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);

        dispatch({ type: UPDATE, payload: data });
    } catch (err) {
        console.log(err);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);

        dispatch({ type: DELETE, payload: {id: id} });

    } catch (err) {
        console.log(err);
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id);

        dispatch({ type: LIKE, payload: data });
    } catch (err) {
        console.log(err);
    }
}

export const commentPost = (value, id) => async (dispatch) => {
    try {
        const { data } = await api.comment(value, id);

        console.log(data);
        dispatch({ type: COMMENT, payload: data });
        return data.comments;
    } catch (err) {
        console.log(err);
    }
}