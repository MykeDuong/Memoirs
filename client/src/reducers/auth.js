import { GOOGLE_AUTH, AUTH, LOGOUT } from '../constants/actionTypes';

const authReducer = (state = { authData: null }, action) => {
    switch (action.type) {
        case GOOGLE_AUTH:
        case AUTH:
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
            window.dispatchEvent( new Event('storage') );
            return { ...state, authData: action?.data };
        case LOGOUT:
            localStorage.clear();
            window.dispatchEvent( new Event('storage') );
            return { ...state, authData: null };
        default:
            return state;
    }
}

export default authReducer;