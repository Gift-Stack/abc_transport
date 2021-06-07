import AdvantagesItem from './AdvantagesItem';

const Advantages = () => {
    return (
        <div className='px-2 mx-sm-5 mx-3' style={{ marginTop: '18vh' }}>
            <div className='row mb-4'>
                <div className='col-4 col-lg-2'>
                    <h5 className='text-nowrap'>Our advantages</h5>
                </div>
                <div className='col-lg-10 col-8'>
                    <hr />
                </div>
            </div>
            <AdvantagesItem />
        </div>
    );
};

export default Advantages;
