import { LOADING, SIGN_UP, GET_USER } from '../types';

export default (state, action) => {
    switch (action) {
        case LOADING:
            return {
                ...state,
                loading: true,
            };
        default:
            return state;
    }
};
