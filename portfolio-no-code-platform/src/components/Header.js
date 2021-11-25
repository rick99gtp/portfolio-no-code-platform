const Header = (props) => {
    return (
        
        <div className='header'>
            <div className='header-logo'>No-Code Portfolio</div>
            <nav>
                {props.appWidth >= 1070 ? 
                <ul>
                    <li>Get Started</li>
                    <li>How It Works</li>
                    <li>Contact</li>
                </ul>
                : null}
            </nav>
        </div>
    )
};

export default Header;