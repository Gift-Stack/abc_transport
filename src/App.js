import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ManageBooking from './pages/ManageBooking';
import Explore from './pages/Explore';
import Cargo from './pages/Cargo';
import Hotel from './pages/Hotel';
import Profile from './pages/Profiles';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

import AuthState from './context/authContext/AuthState';
import UnAuthenticatedRoute from './routing/UnAuthenticatedRoute';
// import { useContext } from 'react';
// import AuthContext from './context/authContext/authContext';

function App() {
    // const authContext = useContext(AuthContext);
    // const { loading } = authContext;
    // console.log(loading);
    // useEffect(() => {
    //     // getUser();
    //     console.log(loading);
    // }, []);
    return (
        <AuthState>
            <Router>
                <div className='App'>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/about' component={About} />
                        <Route path='/bookings' component={ManageBooking} />
                        <Route path='/explore' component={Explore} />
                        <Route path='/cargo' component={Cargo} />
                        <Route path='/hotel' component={Hotel} />
                        <Route path='/my/profile' component={Profile} />

                        <UnAuthenticatedRoute path='/login' component={Login} />
                        <UnAuthenticatedRoute
                            path='/signup'
                            component={SignUp}
                        />
                        <Route
                            path='*'
                            render={() => (
                                <h5
                                    className='d-flex align-items-center justify-content-center'
                                    style={{ height: '100vh' }}
                                >
                                    Whoops, There is nothing here!
                                </h5>
                            )}
                        />
                    </Switch>
                </div>
            </Router>
        </AuthState>
    );
}

export default App;
