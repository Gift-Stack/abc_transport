import Advantages from '../components/layout/Advantages';
import Card from '../components/layout/Card';
import Experience from '../components/layout/Experience';
import Footer from '../components/layout/Footer';
import Jumbotron from '../components/layout/Jumbotron';
import QuickBooking from '../components/layout/QuickBooking';
import Services from '../components/layout/Services';
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
            <Jumbotron />
            <Services />
            <div style={{ height: 80 }}></div>
            <Footer />
        </div>
    );
};

export default Home;
