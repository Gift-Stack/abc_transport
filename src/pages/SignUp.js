import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Signup from '../images/svg/Sign_up.svg';
import AuthContext from '../context/authContext/authContext';

const SignUp = () => {
    const authContext = useContext(AuthContext);
    const { signUp } = authContext;

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const { firstName, lastName, email, password } = user;

    const handleChange = e =>
        setUser({ ...user, [e.target.name]: e.target.value });
    const createUser = e => {
        e.preventDefault();
        try {
            if (
                firstName !== '' &&
                lastName !== '' &&
                email !== '' &&
                password !== ''
            ) {
                signUp(user);

                setUser({
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                });
            }
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div
            className='row gy-5 d-flex align-items-sm-center align-content-center mx-1'
            style={{ height: '100vh', fontSize: 'small' }}
        >
            <div className='col-sm-6'>
                <img src={Signup} alt='DesktopLogin' className='img-fluid' />
            </div>
            <form className='col-sm-6 '>
                <div className='input-group  mb-3'>
                    <input
                        type='text'
                        name='firstName'
                        value={firstName}
                        onChange={handleChange}
                        placeholder='First name'
                        className='form-control'
                        required
                    />
                    <div className='invalid-feedback'>Well</div>
                </div>
                <div className='input-group  mb-3'>
                    <input
                        type='text'
                        name='lastName'
                        value={lastName}
                        onChange={handleChange}
                        placeholder='Last name'
                        className='form-control'
                        required
                    />
                </div>
                <div className='input-group  mb-3'>
                    <input
                        type='email'
                        name='email'
                        value={email}
                        onChange={handleChange}
                        placeholder='Email'
                        className='form-control'
                        required
                    />
                </div>
                <div className='input-group  mb-3'>
                    <input
                        type='password'
                        name='password'
                        value={password}
                        onChange={handleChange}
                        placeholder='Password'
                        className='form-control'
                        required
                    />
                </div>
                <p>
                    Already have an account?{' '}
                    <Link to='/login' style={{ color: '#05be53' }}>
                        Log in
                    </Link>
                </p>
                <button
                    type='submit'
                    className='btn text-sm btn-block text-white rounded'
                    style={{ background: '#05be53' }}
                    onClick={createUser}
                >
                    Create account
                </button>
            </form>
        </div>
    );
};

export default SignUp;
