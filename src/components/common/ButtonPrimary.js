import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { ReactComponent as Logo } from '../../assets/images/icon.svg';
import back from './../../assets/images/back.png';

const ButtonPrimary = ({ type, to }) => (
    <Link className="buttonPrimary" to={to}>
        <Button variant="contained" color="primary">
            <img alt={ type === 'Logo' ? 'Logo' : 'back'} src={ type === 'Logo' ? Logo : back } />
            { type === 'Logo' ? 'Logo' : 'Go Back'}
        </Button>
    </Link>
);

export default ButtonPrimary;