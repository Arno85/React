import React from 'react';
import classes from './NavigationItems.module.scss';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={ classes.NavigationItems }>
        <NavigationItem link="/">BurgerBuilder</NavigationItem>
        <NavigationItem link="/orders">Orders</NavigationItem>
    </ul>
);

export default navigationItems;