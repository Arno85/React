import TodoItem from './TodoItem';
import classes from './TodosList.module.css';
import { useContext } from 'react';
import { TodosContext } from '../store/todos-context';

const TodosList: React.FC = () => {
	const todosCtx = useContext(TodosContext);

	return (
		<ul className={classes.todos}>
			{todosCtx.items.map((todo) => (
				<TodoItem key={todo.id} item={todo} onRemoveTodo={todosCtx.removeTodo.bind(null, todo.id)} />
			))}
		</ul>
	);
};

export default TodosList;
