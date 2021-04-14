import React from 'react';
import { ReactComponent as Logo } from '../../assets/images/icon.svg';
import './footer.styles.scss';

const Footer = () => (
    <div className='logo'>
       <Logo />
    </div>
);

Footer.displayName = 'Footer';

export default Footer;