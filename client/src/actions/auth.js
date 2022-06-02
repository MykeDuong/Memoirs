import * as api from '../api';
import { REG_AUTH, LOGIN_AUTH, GOOGLE_AUTH } from '../constants/actionTypes';

export const regAuth = (userData) => async (dispatch) => {
    try {
        console.log(userData);
        const { data } = await api.regAuth(userData);
        const action = {
            type: REG_AUTH,
            user: data
        }
        console.log("Data: " + data);
        dispatch(action);
    } catch (err) {console.log(err);}
}

export const loginAuth = (userData) => async (dispatch) => {
    try {
        const { data } = await api.loginAuth(userData);
        const action = {
            type: LOGIN_AUTH,
            user: data
        }
        dispatch(action);
    } catch (err) {console.log(err);}
}

export const googleAuth = () => async (dispatch) => {
    try {
        const { data } = await api.googleAuth();
        const action = {
            type: GOOGLE_AUTH,
            user: data
        }
        dispatch(action);
    } catch (err) {console.log(err);}
}