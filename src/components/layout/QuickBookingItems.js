import abuja from '../../images/State destinations/abuja.jpg';
import calabar from '../../images/State destinations/Calabar.jpg';
import enugu from '../../images/State destinations/ENUGU.jpg';
import lagos from '../../images/State destinations/lagos.jpg';
import owerri from '../../images/State destinations/owerri.jpg';
import port_harcourt from '../../images/State destinations/Port-Harcourt.jpg';

const QuickBookingItems = () => {
    return (
        <div className='row g-2'>
            {/* <div className='col-sm-4 card p-0 rounded-0'>
                <img
                    src={calabar}
                    className='card-img img-fluid rounded-0'
                    alt='...'
                ></img>
                <div
                    className='card-img-overlay rounded-0'
                    style={{
                        marginTop: '6em',
                        paddingBottom: '0',
                        paddingLeft: '2em',
                        paddingTop: '3em',
                        background: '#000',
                        // 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0,0, 0.537)),#fff',
                        opacity: 0.3,
                    }}
                >
                    <h5 className='text-white'>Calabar</h5>
                    <p className='text-white'>From Yaba, Lagos</p>
                </div>
            </div> */}
            <div className='col-sm-4'>
                <img src={calabar} className='w-100 h-100 mb-2' alt='...'></img>
            </div>
            <div className='col-sm-4'>
                <img src={enugu} className='w-100 h-100 mb-2' alt='...'></img>
            </div>
            <div className='col-sm-4'>
                <img src={lagos} className='w-100 h-100 mb-2' alt='...'></img>
            </div>
            <div className='col-sm-4'>
                <img src={owerri} className='w-100 h-100 mb-2' alt='...'></img>
            </div>
            <div className='col-sm-4'>
                <img
                    src={port_harcourt}
                    className='w-100 h-100 mb-2'
                    alt='...'
                ></img>
            </div>
            <div className='col-sm-4'>
                <img src={abuja} className='w-100 h-100 mb-2' alt='...'></img>
            </div>
        </div>
    );
};

export default QuickBookingItems;
