import { Link } from 'react-router-dom';
import LoginImg from '../images/svg/Login.svg';

const Login = () => {
    return (
        <div
            className='row gy-5 d-flex align-items-sm-center align-content-center mx-1'
            style={{ height: '100vh', fontSize: 'small' }}
        >
            <div className='col-sm-6'>
                <img src={LoginImg} alt='DesktopLogin' className='img-fluid' />
            </div>
            <form className='col-sm-6'>
                <div className='input-group mb-3'>
                    <div className='input-group-prepend'>
                        <span className='input-group-text' id='basic-addon1'>
                            @
                        </span>
                    </div>
                    <input
                        type='email'
                        placeholder='Email'
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
                        placeholder='Password'
                        className='form-control'
                        required
                    />
                </div>
                <p>
                    Don't have an account?{' '}
                    <Link to='/signup' style={{ color: '#05be53' }}>
                        Sign Up
                    </Link>
                </p>
                <button
                    type='submit'
                    className='btn text-sm btn-block text-white rounded'
                    style={{ background: '#05be53' }}
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
