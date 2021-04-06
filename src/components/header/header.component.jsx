import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/icon.svg';
import './header.styles.scss';

const Header = () => (
    <div className='header'>
        <Link to='/'> 
            <Logo className='logo'/>
        </Link>
        <div className='navs'> 
            <Link className='nav' to=''>
            INICIATIVA
            </Link>
            <Link className='nav' to=''>
            SALVADORAS
            </Link>
            <Link className='nav' to=''>
            BLOG
            </Link>
        </div>
    </div>
);

export default Header;