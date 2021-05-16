import Todo from './../models/todo.model';
import classes from './TodoItem.module.css';

const TodoItem: React.FC<{
	item: Todo;
	onRemoveTodo: () => void;
}> = (props) => {
	return (
		<li className={classes.item} onClick={props.onRemoveTodo}>
			{props.item.title}
		</li>
	);
};

export default TodoItem;
