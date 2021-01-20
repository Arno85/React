import React from 'react';
import Aux from '../../hoc/Auxiliary';
import classes from './Layout.module.scss';

const layout = (props) => (
    <Aux>
        <div>
            Toolbar, Sidedrawer, Navigation
        </div>
        <main className={classes.content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;