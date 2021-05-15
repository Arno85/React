import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter/index';

const Counter = () => {
  const counter = useSelector(state => state.counter.value);
  const visibility = useSelector(state => state.counter.show);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment(1));
  }

  const increaseHandler = () => {
    dispatch(counterActions.increment(5));
  }

  const decrementHandler = () => {
    dispatch(counterActions.decrement(1));
  }

  return (
    <main className={ classes.counter }>
      <h1>Redux Counter</h1>
      { visibility && <div className={ classes.value }>{ counter }</div> }
      <div>
        <button onClick={ incrementHandler }>Increment</button>
        <button onClick={ increaseHandler }>Increase by 5</button>
        <button onClick={ decrementHandler }>Decrement</button>
      </div>
      <button onClick={ toggleCounterHandler }>Toggle Counter</button>
    </main>
  );
};

export default Counter;
