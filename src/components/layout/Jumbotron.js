import google from '../../images/google-play.png';
import apple from '../../images/app-store.png';
import abcmobile from '../../images/abcappmockup.png';

import styles from '../../module_css/jumbotron.module.css';

const Jumbotron = () => {
    return (
        <div className={styles.root}>
            <div
                className='position-absolute'
                style={{ right: '0', bottom: '-384%' }}
            >
                <img
                    src={abcmobile}
                    alt='ABC mobile app'
                    height='500px'
                    style={{ maxWidth: '100%' }}
                />
            </div>
            <div className='jumbotron rounded jumbotron-fluid'>
                <div className='container px-lg-5'>
                    <p className={`${styles.head} lead`}>
                        Download the ABC app for easy booking
                    </p>
                    <p className={styles.body}>
                        Conveniently manage your bookings, tickets, plan all
                        your trips and enjoy discounts. ABC Transport App will
                        help you buy tickets more easily
                    </p>
                    <img
                        src={google}
                        alt='Get it on Google'
                        width='120px'
                        className={`${styles.store} ${styles.storeGoogle}`}
                    />
                    <img
                        src={apple}
                        alt='Download on apple'
                        width='200px'
                        className={styles.store}
                    />
                </div>
            </div>
        </div>
    );
};

export default Jumbotron;
