import styles from './Card.module.scss';

const Card = (props) => {
    const classes = [styles.Card, props.className];

    return (
        <div className={ classes.join(' ') }>
            {props.children }
        </div>
    );
}

export default Card;