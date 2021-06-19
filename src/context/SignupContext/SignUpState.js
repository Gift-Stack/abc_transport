import { useReducer } from 'react';
import SignUpReducer from './signUpReducer';
import SignUpContext from './signUpContext';
import { LOADING, SIGN_UP, GET_USER } from '../types';

const SignUpState = ({ children }) => {
    const initialState = {
        loading: false,
        token: null,
        user: null,
    };

    const [state, dispatch] = useReducer(SignUpReducer, initialState);

    const setLoading = () => dispatch({ type: LOADING });

    return (
        <SignUpContext.Provider
            value={{
                loading: state.loading,
                token: state.token,
                user: state.user,
                setLoading,
            }}
        >
            {children}
        </SignUpContext.Provider>
    );
};

export default SignUpState;
