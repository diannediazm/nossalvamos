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
            <Link className='nav' to='/iniciativa'>
            INICIATIVA
            </Link>
            <Link className='nav' to='/contacto'>
            CONTACTO
            </Link>
        </div>
    </div>
);

export default Header;