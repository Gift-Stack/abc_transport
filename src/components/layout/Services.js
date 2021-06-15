import Sprinter from '../../images/sprinter-logo.png';
import Transit from '../../images/service-2.jpg';
import Coach from '../../images/service-3.jpg';
import Cargo from '../../images/cargo-log.png';

const Services = () => {
    return (
        <div
            align={'center'}
            className='container d-flex justify-content-around overflow-hidden'
        >
            <img src={Sprinter} alt='Sprinter' width='15%' />
            <img src={Transit} alt='Transit' width='15%' />
            <img src={Coach} alt='Coach' width='15%' />
            <img src={Cargo} alt='Cargo' width='15%' />
        </div>
    );
};

export default Services;
