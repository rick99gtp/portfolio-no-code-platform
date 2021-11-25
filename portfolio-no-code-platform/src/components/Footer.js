const Footer = () => {
    const d = new Date();
    const currentYear = d.getFullYear();

    return (
        <div className='footer__container'>
            Copyright &#169; <span>{currentYear}</span>. All rights reserved.
        </div>
    )
}

export default Footer;