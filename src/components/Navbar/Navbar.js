import { useContext } from 'react';
import { useMediaQuery } from 'react-responsive';
import logo from '../../images/ng-abctra-logo.png';
import { Link } from 'react-router-dom';
import hamburgerMenu from '../../images/icons/ham-menu@2x.png';

import AuthContext from '../../context/authContext/authContext';

const Navbar = () => {
    const { isAuth, loading } = useContext(AuthContext);

    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    return (
        <div className='position-absolute w-100 navigation border-bottom border-white'>
            <nav
                className='navbar navbar-expand-md navbar-light justify-content-between px-4 nav-bar'
                style={
                    {
                        // background: `${isMobile ? '#00913e' : 'transparent'}`,
                    }
                }
            >
                <img
                    src={logo}
                    alt='Logo'
                    width={50}
                    style={{ marginLeft: '1.8em' }}
                />
                <div
                    className='navbar-toggler border-0'
                    data-toggle='collapse'
                    data-target='#navbarSupportedContent'
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <img
                        className='navbar-toggler-icon'
                        src={hamburgerMenu}
                        alt='ham_menu'
                        style={{ height: '1em' }}
                    />
                </div>

                <div
                    className='collapse navbar-collapse text-center justify-content-end'
                    id='navbarSupportedContent'
                >
                    <ul
                        className='navbar-nav text-center d-flex justify-content-between align-items-center'
                        style={{ fontWeight: 'bold', fontSize: 'small' }}
                    >
                        <li className='nav-item px-1 my-1  active'>
                            <Link className='nav-link text-white' to='/about'>
                                About
                            </Link>
                        </li>
                        <li className='nav-item px-1 my-1'>
                            <Link
                                to='/bookings'
                                className='nav-link text-white'
                            >
                                Manage Booking
                            </Link>
                        </li>
                        <li className='nav-item px-1 my-1'>
                            <Link
                                to='/explore'
                                className='nav-link text-white'
                                href='#'
                            >
                                Explore
                            </Link>
                        </li>
                        <li className='nav-item px-1 my-1'>
                            <Link
                                to='/cargo'
                                className='nav-link text-white'
                                href='#'
                            >
                                Cargo
                            </Link>
                        </li>
                        <li className='nav-item px-1 my-1'>
                            <Link
                                to='/hotel'
                                className='nav-link text-white '
                                href='#'
                            >
                                Hotel
                            </Link>
                        </li>
                        {isAuth && !loading && (
                            <li className='nav-item px-1 my-1'>
                                <Link
                                    to='/my/profile'
                                    className='nav-link text-white '
                                    href='#'
                                >
                                    Profile
                                </Link>
                            </li>
                        )}
                        {!isAuth && !loading && (
                            <li className='nav-item px-1 my-1'>
                                <Link
                                    to='/login'
                                    className='nav-link text-white btn border-white border-1 py-1 px-3 btn-other'
                                    href='#'
                                    style={{
                                        fontWeight: 'bolder',
                                        fontSize: 'small',
                                    }}
                                >
                                    LOG IN
                                </Link>
                            </li>
                        )}
                        {!isAuth && !loading && (
                            <li className='nav-item px-1 my-1'>
                                <Link
                                    to='/signup'
                                    className='nav-link text-white btn py-1 px-3 secondary-btn'
                                    href='#'
                                    style={{
                                        fontWeight: 'bolder',
                                        fontSize: 'small',
                                    }}
                                >
                                    SIGN UP
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
