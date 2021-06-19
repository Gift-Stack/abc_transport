import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ManageBooking from './pages/ManageBooking';
import Explore from './pages/Explore';
import Cargo from './pages/Cargo';
import Hotel from './pages/Hotel';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

import AuthState from './context/authContext/AuthState';

function App() {
    return (
        <Router>
            <AuthState>
                <div className='App'>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/about' component={About} />
                        <Route
                            exact
                            path='/bookings'
                            component={ManageBooking}
                        />
                        <Route exact path='/explore' component={Explore} />
                        <Route exact path='/cargo' component={Cargo} />
                        <Route exact path='/hotel' component={Hotel} />
                        <Route exact path='/login' component={Login} />
                        <Route exact path='/signup' component={SignUp} />
                    </Switch>
                </div>
            </AuthState>
        </Router>
    );
}

export default App;
