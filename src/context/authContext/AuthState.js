import { useReducer } from 'react';
import authReducer from './authReducer';
import AuthContext from './authContext';
import {
    LOADING,
    SIGN_UP_SUCCESS,
    GET_USER_SUCCESS,
    GET_USER_FAIL,
    ADD_NEW_USER_DATA_SUCCESS,
    ADD_NEW_USER_DATA_FAILED,
    SEND_EMAIL_VERIFICATION_SUCCESS,
    SEND_EMAIL_VERIFICATION_FAILED,
    SIGN_UP_FAILED,
} from '../types';

import firebase from 'firebase';

const AuthState = ({ children }) => {
    const initialState = {
        loading: false,
        token: null,
        user: null,
        isEmailVerified: false,
        emailVerificationMessage: null,
        isAuth: false,
    };

    const [state, dispatch] = useReducer(authReducer, initialState);

    const setLoading = () => dispatch({ type: LOADING });

    const getUser = () => {
        const user = firebase.auth().currentUser;
        if (user) {
            dispatch({ type: GET_USER_SUCCESS, payload: user });
        } else {
            dispatch({ type: GET_USER_FAIL });
        }
    };

    const addData = async data => {
        const user = firebase.auth().currentUser;
        const { firstName, lastName } = data;
        setLoading();
        user.updateProfile({
            displayName: `${firstName} ${lastName}`,
        })
            .then(() => {
                dispatch({ type: ADD_NEW_USER_DATA_SUCCESS, payload: user });
            })
            .catch(error => {
                dispatch({ type: ADD_NEW_USER_DATA_FAILED, payload: error });
            });
    };

    const verifyEmail = () => {
        firebase
            .auth()
            .currentUser.sendEmailVerification()
            .then(() => {
                dispatch({
                    type: SEND_EMAIL_VERIFICATION_SUCCESS,
                    payload:
                        'You will receive an email to verify your account ',
                });
            })
            .catch(err => {
                dispatch({
                    type: SEND_EMAIL_VERIFICATION_FAILED,
                    payload: err,
                });
            });
    };

    const signUp = async data => {
        setLoading();
        const { email, password } = data;
        try {
            const createAccount = await firebase
                .auth()
                .createUserWithEmailAndPassword(email, password);
            await addData(data);
            await verifyEmail();

            dispatch({ type: SIGN_UP_SUCCESS, payload: createAccount });
        } catch (error) {
            dispatch({ type: SIGN_UP_FAILED, payload: error });
        }
    };

    return (
        <AuthContext.Provider
            value={{
                loading: state.loading,
                token: state.token,
                user: state.user,
                isEmailVerified: state.isEmailVerified,
                emailVerificationMessage: state.emailVerificationMessage,
                isAuth: state.isAuth,
                signUp,
                getUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthState;
