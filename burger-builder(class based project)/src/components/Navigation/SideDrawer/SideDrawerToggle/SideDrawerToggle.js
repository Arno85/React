import React from 'react';
import classes from './SideDrawerToggle.module.scss';

const sideDrawerToggle = (props) => (
    <div onClick={props.opened} className={classes.SideDrawerToggle}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default sideDrawerToggle;