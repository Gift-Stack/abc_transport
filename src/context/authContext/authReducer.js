import {
    LOADING,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILED,
    ADD_NEW_USER_DATA_SUCCESS,
    ADD_NEW_USER_DATA_FAILED,
    SEND_EMAIL_VERIFICATION_SUCCESS,
    SEND_EMAIL_VERIFICATION_FAILED,
    // GET_USER,
} from '../types';

export default (state, action) => {
    switch (action) {
        case LOADING:
            return {
                ...state,
                loading: true,
            };
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload.user,
            };
        case SIGN_UP_FAILED:
        case ADD_NEW_USER_DATA_FAILED:
            return {
                ...state,
                loading: false,
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
