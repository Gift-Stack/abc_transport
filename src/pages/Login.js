import { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginImg from '../images/svg/Login.svg';

const Login = () => {
    const [click, setClick] = useState(false);
    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const { email, password } = user;

    const handleChange = e =>
        setUser({ ...user, [e.target.name]: e.target.value });

    const loginUser = e => {
        e.preventDefault();
        setClick(true);
        try {
            if (email !== '' && password !== '') {
                setUser({
                    email: '',
                    password: '',
                });
                e.target.disabled = true;
                setClick(false);
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
                <img src={LoginImg} alt='DesktopLogin' className='img-fluid' />
            </div>
            <form className={`col-sm-6 ${click && 'was-validated'}`}>
                <div className='input-group mb-3'>
                    <div className='input-group-prepend'>
                        <span className='input-group-text' id='basic-addon1'>
                            <i className='bi bi-envelope-fill'></i>
                        </span>
                    </div>
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
                <div className='input-group mb-3'>
                    <div className='input-group-prepend'>
                        <span className='input-group-text' id='basic-addon1'>
                            <i className='bi bi-key-fill'></i>
                        </span>
                    </div>
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
                    Don't have an account?
                    <Link to='/signup' style={{ color: '#05be53' }}>
                        {' '}
                        Sign Up
                    </Link>
                </p>
                <button
                    type='submit'
                    className='btn text-sm btn-block text-white rounded'
                    style={{ background: '#05be53' }}
                    onClick={loginUser}
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
