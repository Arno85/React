import Nav from './Nav';
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={ classes.header }>
            <Nav />
        </header>
    );
}

export default Header;