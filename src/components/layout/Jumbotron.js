import google from '../../images/google-play.png';
import apple from '../../images/app-store.png';
import abcmobile from '../../images/abcappmockup.png';

import styles from '../../module_css/jumbotron.module.css';

const Jumbotron = () => {
    return (
        <div className={styles.root}>
            <div className={styles.mobileApp}>
                <img src={abcmobile} alt='ABC mobile app' height='500px' />
            </div>
            <div
                className={
                    'jumbotron rounded jumbotron-fluid' +
                    styles.jumbotronContent
                }
            >
                <div className='container px-md-5 px-sm-2'>
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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero iusto
            autem eius placeat reprehenderit necessitatibus consequuntur, a
            atque sequi aliquid mollitia minus labore laborum itaque officiis
            veniam praesentium enim tempora? Aliquid aspernatur maiores unde a
            voluptate quia dolore earum ex illo provident hic deserunt nisi,
            perspiciatis neque! Sint facere pariatur dolore obcaecati magni,
            maiores consequuntur soluta vel eaque, dolor exercitationem maxime
            iste corporis laboriosam tempore ipsam libero eum. Maiores molestias
            asperiores eos qui rem minus architecto esse soluta. Ad eos, iusto
            recusandae maiores quod, provident vero quo quidem dignissimos
            explicabo perspiciatis illum unde sit. Debitpraesentium non incidunt
            explicabo error?
        </div>
    );
};

export default Jumbotron;
