import { NavLink } from 'react-router-dom';
import classes from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={ classes.nav }>
            <ul>
                <li>
                    <NavLink
                        activeClassName={ classes.active }
                        to="/welcome">Welcome</NavLink>
                </li>
                <li>
                    <NavLink
                        activeClassName={ classes.active }
                        to="/products">Products</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;