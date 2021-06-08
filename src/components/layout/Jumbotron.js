import google from '../../images/google-play.png';
import apple from '../../images/app-store.png';

import styles from '../../module_css/jumbotron.module.css';

const Jumbotron = () => {
    return (
        <div className={styles.root}>
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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            dolore ea placeat. Facilis assumenda nam ullam delectus recusandae
            pariatur aliquid necessitatibus omnis. Quam doloremque cupiditate
            nulla aliquid quia mollitia ratione pariatur labore laborum
            consequatur nemo ipsum dolore esse, perspiciatis repudiandae
            distinctio reprehenderit ipsa est aliquam repellat, fugit
            voluptatibus maiores qui! Harum pariatur natus unde voluptate fuga
            dignissimos. Alias quaerat et aut deleniti laudantium, nobis, labore
            tempore architecto aspernatur officia dolorum accusantium,
            repellendus praesentium autem reprehenderit dolore. Fuga quasi
            nihil, voluptate nesciunt quis ab, commodi libero cupiditate culpa,
            suscipit velit sunt numquam animi itaque consectetur minima.
            Excepturi adipisci illum explicabo accusantium!
        </div>
    );
};

export default Jumbotron;
