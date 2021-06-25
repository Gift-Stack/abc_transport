import {
    LOADING,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILED,
    ADD_NEW_USER_DATA_SUCCESS,
    ADD_NEW_USER_DATA_FAILED,
    SEND_EMAIL_VERIFICATION_SUCCESS,
    SEND_EMAIL_VERIFICATION_FAILED,
    GET_USER_SUCCESS,
    GET_USER_FAIL,
} from '../types';

// eslint-disable-next-line
export default (state, action) => {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: true,
            };
        case SIGN_UP_SUCCESS:
        case GET_USER_SUCCESS:
            localStorage.setItem('user', action.payload.user);
            return {
                ...state,
                loading: false,
                isAuth: true,
                user: action.payload.user,
            };
        case SIGN_UP_FAILED:
        case GET_USER_FAIL:
        case ADD_NEW_USER_DATA_FAILED:
            localStorage.removeItem('user');

            return {
                ...state,
                loading: false,
                isAuth: false,
                user: null,
            };
        case ADD_NEW_USER_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
            };
        case SEND_EMAIL_VERIFICATION_SUCCESS:
            return {
                ...state,
                isEmailVerified: true,
                emailVerificationMessage: action.payload,
            };
        case SEND_EMAIL_VERIFICATION_FAILED:
            return {
                ...state,
                isEmailVerified: false,
                emailVerificationMessage: action.payload,
            };
        default:
            return state;
    }
};
