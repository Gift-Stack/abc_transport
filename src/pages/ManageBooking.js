import { Link } from 'react-router-dom';

const ManageBooking = () => {
    return (
        <div className='' style={{ fontSize: 'small' }}>
            <div
                className='d-md-flex text-center justify-content-md-between align-items-center w-100 px-sm-5 px-1 py-2'
                style={{ background: '#00913e' }}
            >
                <div className=''>
                    <span className='pr-2 d-flex justify-content-center d-md-block'>
                        <i className='bi bi-envelope-fill text-white'></i>{' '}
                        <a
                            className='text-white'
                            href='mailto:gkenny896@gmail.com'
                            style={{ textDecoration: 'none' }}
                        >
                            gkenny896@gmail.com
                        </a>
                    </span>
                    <span className='pl-4 d-flex justify-content-center d-md-block'>
                        <i className='bi bi-telephone-fill text-white'></i>{' '}
                        <a
                            className='text-white'
                            href='tel:07045583524'
                            style={{ textDecoration: 'none' }}
                        >
                            +234 704 558 3524
                        </a>
                    </span>
                </div>
                <div>
                    <Link
                        to='/agent/login'
                        className='text-white d-flex justify-content-center d-md-block'
                    >
                        Agent Login
                    </Link>
                    <Link
                        to='/agent/registration'
                        className='text-white d-flex justify-content-center d-md-block'
                    >
                        Agent Registration
                    </Link>
                </div>
            </div>
            {/* <div className='card'>
                <h5 className='card-header'>Featured</h5>
                <div className='card-body'>
                    <h5 className='card-title'>Special title treatment</h5>
                    <p className='card-text'>
                        With supporting text below as a natural lead-in to
                        additional content.
                    </p>
                    <Link to='#' className='btn btn-primary'>
                        Go somewhere
                    </Link>
                </div>
            </div> */}
        </div>
    );
};

export default ManageBooking;
