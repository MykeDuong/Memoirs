import * as api from '../api';
import { REG_AUTH, LOGIN_AUTH, GOOGLE_AUTH } from '../constants/actionTypes';

export const regAuth = (userData) => async (dispatch) => {
    try {
        console.log(userData);
        const { user } = await api.regAuth(userData);
        const action = {
            type: REG_AUTH,
            payload: user
        }
        console.log("Data: " + user);
        dispatch(action);
    } catch (err) {console.log(err);}
}

export const loginAuth = (userData) => async (dispatch) => {
    try {
        console.log(userData);
        const { user } = await api.loginAuth(userData);
        const action = {
            type: LOGIN_AUTH,
            payload: user
        }
        console.log("Data: " + user);
        dispatch(action);
    } catch (err) {console.log(err);}
}

export const googleAuth = () => async (dispatch) => {
    try {
        const { user } = await api.googleAuth();
        const action = {
            type: GOOGLE_AUTH,
            payload: user
        }
        console.log("Data: " + user);
        dispatch(action);
    } catch (err) {console.log(err);}
}