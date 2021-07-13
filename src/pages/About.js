const About = () => {
    return (
        <div
            className='d-flex justify-content-center align-items-center text-center'
            style={{ height: '100vh', lineHeight: 1 }}
        >
            <div>
                <p>
                    ABC Transport. This project is a bootstrap + modification of{' '}
                    <a
                        href='https://www.abctransport.com'
                        target='_blank'
                        rel='noreferrer'
                        style={{ color: '#05be53' }}
                    >
                        abctransport.com
                    </a>
                </p>
                <p>Author: Gift Opia</p>
                <p>Version 1.0.0</p>
            </div>
        </div>
    );
};

export default About;
