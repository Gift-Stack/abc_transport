import QuickBookingItems from './QuickBookingItems';

// import AOS from 'aos';
// import { useEffect } from 'react';

const QuickBooking = () => {
    return (
        <div className='px-2 mx-sm-5 mx-3'>
            <div className='row mb-4'>
                <div className='col-3 col-lg-2'>
                    <h5 className='text-nowrap'>Quick Book</h5>
                </div>
                <div className='col-lg-10 col-9'>
                    <hr />
                </div>
            </div>
            <QuickBookingItems />
        </div>
    );
};

export default QuickBooking;
