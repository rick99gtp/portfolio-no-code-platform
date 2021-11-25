import Header from './Header';
import HeroInfo from './HeroInfo';

const Hero = (props) => {
    return (
        <div className='hero__container'>
            <Header appWidth={props.appWidth} />
            <div className='hero__inner'>
                <HeroInfo />
                <img />
            </div>
        </div>
    )
};

export default Hero;