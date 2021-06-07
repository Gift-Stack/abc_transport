import Advantages from '../components/layout/Advantages';
import Card from '../components/layout/Card';
import Experience from '../components/layout/Experience';
import QuickBooking from '../components/layout/QuickBooking';
import Navbar from '../components/Navbar/Navbar';
const Home = () => {
    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <Navbar />
            <div className='image d-flex flex-column justify-content-center'>
                <h1 className='text-white heading'>Let us take you there</h1>
                <p className='text-white paragraph'>
                    Pleasure or business, we will take you anywhere within West
                    Africa in comfort and safety
                </p>
                <div
                    className='btn text-white secondary-btn'
                    style={{ width: '7rem' }}
                >
                    Book Now
                </div>
            </div>
            <Card />
            <QuickBooking />
            <Advantages />
            <Experience />
        </div>
    );
};

export default Home;
