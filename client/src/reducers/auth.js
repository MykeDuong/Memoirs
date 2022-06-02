import { REG_AUTH, LOGIN_AUTH, GOOGLE_AUTH } from '../constants/actionTypes';

const authReducer = (user = {name: '', email:''}, action) => {
    switch (action.type) {
        case REG_AUTH:
            console.log(action.user);
            return action.user;
        case LOGIN_AUTH:
            console.log(action.user);
            return action.user;
        case GOOGLE_AUTH:
            return action.user;
        default:
            return user;
    }
}

export default authReducer;