import React from 'react';
import classes from './Logo.module.scss';
import burgerLogo from '../../assets/images/burger-logo.png'
import { Link } from 'react-router-dom';

const logo = (props) => (
    <div className={ classes.Logo }>
        <Link to="/">
            <img src={ burgerLogo } alt="Logo" />
        </Link>
    </div>
);

export default logo;