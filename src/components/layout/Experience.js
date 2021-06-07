import { Link } from 'react-router-dom';
import lady from '../../images/lady.jpg';

import { IconContext } from 'react-icons';
import { FaCheckCircle } from 'react-icons/fa';

const Experience = () => {
    return (
        <div className='overflow-hidden '>
            <div className='row g-5'>
                <div className='col-sm-6 order-last order-sm-first'>
                    <img
                        src={lady}
                        alt='abctransport lady experience'
                        width='100%'
                    />
                </div>
                <div className='col-sm-6 order-first order-sm-first d-flex align-items-center'>
                    <div className='text-left pr-3 px-4 px-sm-0 mr-sm-5'>
                        <h5>Comfortable travel experience</h5>
                        <p style={{ fontSize: 'small' }}>
                            It is a long establish fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
                            Ipsum is that it has a more-or-less normal
                            distribution of letters, as opposed to using
                            'Content here,content here', making it look like
                            readable English. Many desktop publishing packages
                        </p>
                        {/*  */}
                        <IconContext.Provider
                            value={{
                                color: 'blue',
                                className: 'global-class-name',
                            }}
                        >
                            <FaCheckCircle />
                        </IconContext.Provider>
                        {/*  */}
                        <Link
                            to='/about'
                            className='btn btn-sub py-2 px-2'
                            style={{
                                fontWeight: 'bolder',
                                fontSize: 'small',
                            }}
                        >
                            LEARN MORE
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
