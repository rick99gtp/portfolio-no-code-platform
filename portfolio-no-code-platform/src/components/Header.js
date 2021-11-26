import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from '../assets/no-code-portfolio-logo.png';
import DesktopMenu from './DesktopMenu';

const Header = (props) => {
    return (
        <div className='header__container'>
            <img src={logo} alt="logo"/>
            {props.appWidth >= 1070 ? <nav> <DesktopMenu /> </nav> : null}
        </div>
    )
};

export default Header;