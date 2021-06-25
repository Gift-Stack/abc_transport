import { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import AuthContext from '../context/authContext/authContext';

const UnAuthenticatedRoute = ({ component: Component, ...rest }) => {
    const { isAuth, loading } = useContext(AuthContext);
    return (
        <Route
            {...rest}
            render={props =>
                isAuth && !loading ? (
                    <Redirect to='/bookings' />
                ) : (
                    <Component {...props} />
                )
            }
        />
    );
};

export default UnAuthenticatedRoute;
