import { Link } from 'react-router-dom';
import LoginLg from '../images/svg/Login.svg';
// import LoginSm from '../images/svg/Mobile_login.svg';

const Login = () => {
    return (
        <div className='d-flex align-items-center' style={{ height: '100vh' }}>
            <div className='col-12 col-md'>
                <img src={LoginLg} alt='DesktopLogin' className='img-fluid' />
            </div>
            <div className='col-12 col-md'>
                <div className='input-group mb-3'>
                    <div className='input-group-prepend'>
                        <span className='input-group-text' id='basic-addon1'>
                            @
                        </span>
                    </div>
                    <input
                        type='email'
                        placeholder='Enter your email'
                        className='form-control'
                        required
                    />
                </div>
                <div className='input-group mb-3'>
                    <div className='input-group-prepend'>
                        <span className='input-group-text' id='basic-addon1'>
                            @
                        </span>
                    </div>
                    <input
                        type='password'
                        placeholder='Enter your password'
                        className='form-control'
                        required
                    />
                </div>
                <p>
                    Don't have an account?
                    <Link to='/signup' style={{ color: '#05be53' }}>
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
