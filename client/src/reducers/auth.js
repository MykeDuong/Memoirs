import { REG_AUTH, LOGIN_AUTH, GOOGLE_AUTH } from '../constants/actionTypes';

const authReducer = (user = ({}), action) => {
    switch (action.type) {
        case REG_AUTH:
            console.log(user);
            return action.user;
        case LOGIN_AUTH:
            console.log(user);
            return action.user;
        case GOOGLE_AUTH:
            return action.user;
        default:
            return user;
    }
}

export default authReducer;