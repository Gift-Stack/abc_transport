import { Link } from 'react-router-dom';
import lady from '../../images/lady.jpg';

const Experience = () => {
    return (
        <div className='overflow-hidden '>
            <div className='row g-5'>
                <div className='col-sm-6 order-last order-sm-first'>
                    <img
                        src={lady}
                        alt='abctransport lady experience'
                        width='100%'
                        // height='100'
                    />
                </div>
                <div className='col-sm-6 order-first order-sm-first d-flex align-items-center'>
                    <div className='text-left pr-3 px-4 px-sm-0 mr-sm-5'>
                        <h5>Comfortable travel experience</h5>
                        <p style={{ fontSize: 'smaller' }}>
                            It is a long establish fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
                            Ipsum is that it has a more-or-less normal
                            distribution of letters, as opposed to using
                            'Content here,content here', making it look like
                            readable English. Many desktop publishing packages
                        </p>

                        <div
                            className='row my-4'
                            style={{ fontSize: 'smaller', fontWeight: 'bold' }}
                        >
                            <div className='col-6'>
                                <div className='d-flex'>
                                    <i className='bi bi-check-circle-fill text-success'></i>
                                    <p className='px-3'>Charging point</p>
                                </div>
                                <div className='d-flex'>
                                    <i className='bi bi-check-circle-fill text-success'></i>
                                    <p className='px-3'>Emergency exit</p>
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='d-flex'>
                                    <i className='bi bi-check-circle-fill text-success'></i>
                                    <p className='px-3'>Safety concious</p>
                                </div>
                                <div className='d-flex'>
                                    <i className='bi bi-check-circle-fill text-success'></i>
                                    <p className='px-3'>More legroom</p>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='d-flex'>
                                    <i className='bi bi-check-circle-fill text-success'></i>
                                    <p className='px-3'>Fire extinguisher</p>
                                </div>
                            </div>
                        </div>

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
