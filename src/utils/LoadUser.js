import { useContext } from 'react';
import AuthContext from '../context/authContext/authContext';

const LoadUser = token => {
    const { getUser } = useContext(AuthContext);
    if (token) {
        getUser();
    }
};

export default LoadUser;
