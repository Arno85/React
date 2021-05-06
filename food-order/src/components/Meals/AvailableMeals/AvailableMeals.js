import classes from './AvailableMeals.module.css';
import MealItem from '../MealItem/MealItem';
import Card from '../../UI/Card/Card'
import { useEffect, useState } from 'react';
import useHttp from '../../../hooks/use-http';

const AvailableMeals = () => {
    const [meals, setMeals] = useState([]);
    const { isLoading, error, sendRequest: fetchMeals } = useHttp();

    const mealsDataAdapter = data => {
        const fetchedMeals = Object.keys(data).map(k => ({
            id: k,
            name: data[k].name,
            description: data[k].description,
            price: data[k].price,
        }));

        setMeals(fetchedMeals);
    }

    useEffect(() => {
        fetchMeals(
            { url: 'https://learning-react-arno85-default-rtdb.firebaseio.com/meals.json' },
            mealsDataAdapter
        );
    }, [fetchMeals]);

    let mealsContent = <ul>
        { meals.map(meal =>
            <MealItem
                key={ meal.id }
                id={ meal.id }
                name={ meal.name }
                description={ meal.description }
                price={ meal.price }
            />) }
    </ul>;

    if (isLoading) {
        mealsContent = <h3>Loading...</h3>;
    }

    if (error) {
        mealsContent = <h3>{ error }</h3>;
    }

    return (
        <section className={ classes.meals }>
            <Card>
                { mealsContent }
            </Card>
        </section>
    );
}

export default AvailableMeals;