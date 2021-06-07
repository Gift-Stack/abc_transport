import award from '../../images/icons/award.png';
import discount from '../../images/icons/discount.png';
import kid from '../../images/icons/kid-id-lg.png';

const AdvantagesItem = () => {
    return (
        <div className='my-3 mb-5'>
            <div className='row g-3'>
                <div className='col-md-4'>
                    <div
                        className='card card-body border-white h-100'
                        style={{
                            boxShadow:
                                '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                        }}
                    >
                        <div className='row text-center g-3'>
                            <div className='col-sm-3'>
                                <img
                                    src={discount}
                                    alt='discount sticker'
                                    width={40}
                                />
                            </div>
                            <div className='col-sm-9 text-sm-left'>
                                <p
                                    className='h5'
                                    style={{ fontWeight: 'bold' }}
                                >
                                    Kids' discount
                                </p>
                                <p>
                                    Kids below the age of 12 and students within
                                    West Africa region get a rebate for every
                                    ticket, even Youth Corpers
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div
                        className='card card-body border-white h-100'
                        style={{
                            boxShadow:
                                '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                        }}
                    >
                        <div className='row text-center g-3'>
                            <div className='col-sm-3'>
                                <img
                                    src={award}
                                    alt='discount sticker'
                                    width={40}
                                />
                            </div>
                            <div className='col-sm-9 text-sm-left'>
                                <p
                                    className='h5'
                                    style={{ fontWeight: 'bold' }}
                                >
                                    Best industry award
                                </p>
                                <p>
                                    2015-CITL Pioneer Luxury Bus Operator on the
                                    international (West Coach, Africa)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div
                        className='card card-body border-white h-100'
                        style={{
                            boxShadow:
                                '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                        }}
                    >
                        <div className='row text-center g-3'>
                            <div className='col-sm-3'>
                                <img
                                    src={kid}
                                    alt='discount sticker'
                                    width={40}
                                />
                            </div>
                            <div className='col-sm-9 text-sm-left'>
                                <p
                                    className='h5'
                                    style={{ fontWeight: 'bold' }}
                                >
                                    Loyalty cards
                                </p>
                                <p>
                                    Complete Ten trips in a year and get your
                                    Eleventh trip free. You will also
                                    automaticallty become a Gold customer
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvantagesItem;
