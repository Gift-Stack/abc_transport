import { Link } from 'react-router-dom';
import Logo from '../images/ng-abctra-logo.png';
import Lagos from '../images/State destinations/lagos.jpg';

const ManageBooking = () => {
    return (
        <div
            className='text-white'
            style={{
                fontSize: 'small',
                backgroundImage: `url(${Lagos})`,
                backgroundPosition: '100% 40%',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                minHeight: '100vh',
            }}
        >
            <nav
                className='navbar navbar-expand-md justify-content-between px-5 navbar-light'
                style={{ backgroundColor: 'rgba(5, 190, 83, 0.5)' }}
            >
                <Link to='/' className='navbar-brand' href='#'>
                    <img src={Logo} alt='Abc Transport' width={50} />
                </Link>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-toggle='collapse'
                    data-target='#navbarSupportedContent'
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>

                <div
                    className='collapse navbar-collapse'
                    id='navbarSupportedContent'
                >
                    <ul className='navbar-nav mr-auto'>
                        <li className='nav-item active'>
                            <span className='d-flex align-items-center'>
                                <i className='bi bi-envelope-fill'></i>
                                <a
                                    href='mailto:gkenny896@gmail.com'
                                    className='nav-link'
                                >
                                    gkenny896@gmail.com
                                </a>
                            </span>
                        </li>
                        <li className='nav-item'>
                            <span className='d-flex align-items-center'>
                                <i className='bi bi-telephone-fill'></i>{' '}
                                <a className='nav-link' href='tel:07045583524'>
                                    +234 704 558 3524
                                </a>
                            </span>
                        </li>
                        <li className='nav-item'>
                            <Link to='/agent/login' className='nav-link'>
                                Agent login
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/agent/registration' className='nav-link'>
                                Agent registration
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <div
                className='row mx-1 mx-sm-5 my-5'
                style={{ fontSize: 'larger' }}
            >
                <div className='col-md-10 col-lg-8'>
                    <div
                        className='card p-md-5 py-5 px-3'
                        style={{ background: 'rgba(10, 9, 62, 0.5)' }}
                    >
                        <h5 className='text-white mb-4'>Manage Booking</h5>
                        <div>
                            <label className='text-white'>
                                Reference Number
                            </label>
                            <input type='text' className='form-control mb-3' />
                        </div>
                        <div>
                            <label className='text-white'>
                                Email/Phone Number
                            </label>
                            <input type='text' className='form-control mb-4' />
                        </div>
                        <button type='submit' className='btn btn-success'>
                            Search Ticket
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageBooking;
