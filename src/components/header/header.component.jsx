import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/images/icon.svg';
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
            <Link className='nav' to='/salvadoras'>
            SALVADORAS
            </Link>
            <Link className='nav' to='/contacto'>
            CONTACTO
            </Link>
        </div>
    </div>
);

Header.displayName = 'Header';

export default Header;