
import { userService } from '../../services/userService.js';

export function getUser() {
    return async dispatch => {
        const user = await userService.getUser();
        dispatch({ type: 'SET_USER', user });
    }
}

export function userSignup(userName) {
    return async dispatch => {
        const user = await userService.signup(userName)
        dispatch({ type: 'USER_SIGNUP', user })
    }
}

export function transferFunds(sentTo) {
    return async dispatch => {
        const user = userService.transferFunds(sentTo);
        dispatch({ type: 'TRANSFER_FUNDS', user });
    }
}