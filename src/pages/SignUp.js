import { Link } from 'react-router-dom';
import Signup from '../images/svg/Sign_up.svg';

const SignUp = () => {
    return (
        <div
            className='row gy-5 d-flex align-items-sm-center align-content-center mx-1'
            style={{ height: '100vh', fontSize: 'small' }}
        >
            <div className='col-sm-6'>
                <img src={Signup} alt='DesktopLogin' className='img-fluid' />
            </div>
            <div className='col-sm-6'>
                <div className='input-group mb-3'>
                    <input
                        type='text'
                        placeholder='First name'
                        className='form-control'
                        required
                    />
                </div>
                <div className='input-group mb-3'>
                    <input
                        type='text'
                        placeholder='Last name'
                        className='form-control'
                        required
                    />
                </div>
                <div className='input-group mb-3'>
                    <input
                        type='email'
                        placeholder='Email'
                        className='form-control'
                        required
                    />
                </div>
                <div className='input-group mb-3'>
                    <input
                        type='password'
                        placeholder='Password'
                        className='form-control'
                        required
                    />
                </div>
                <p>
                    Already have an account?
                    <Link to='/login' style={{ color: '#05be53' }}>
                        Log in
                    </Link>
                </p>
                <button
                    className='btn text-sm btn-block text-white rounded'
                    style={{ background: '#05be53' }}
                >
                    Create account
                </button>
            </div>
        </div>
    );
};

export default SignUp;
