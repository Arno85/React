import React from 'react';
import Logo from './../../Logo/Logo';
import NavigationItems from './../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.scss';
import Backdrop from './../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

const sidedrawer = (props) => {
    const attachedClasses = [classes.SideDrawer];
    attachedClasses[1] = props.open
        ? classes.Open
        : classes.Close;

    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <NavigationItems />
            </div>
        </Aux>
    );
};

export default sidedrawer;
