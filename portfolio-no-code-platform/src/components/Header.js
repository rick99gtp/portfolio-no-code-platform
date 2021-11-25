import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import DesktopMenu from './DesktopMenu';
import HamburgerMenu from './HamburgerMenu';

const Header = (props) => {
    return (
        <div className='header__container'>
            <div className='header__logo'>No-Code Portfolio</div>
            <nav>
                {props.appWidth >= 1070 ? 
                <DesktopMenu /> :
                <HamburgerMenu />}
            </nav>
        </div>
    )
};

export default Header;