import { useRef } from 'react';
import classes from './NewTodo.module.css';
import { useContext } from 'react';
import { TodosContext } from '../store/todos-context';

const NewTodo: React.FC = () => {
	const todosCtx = useContext(TodosContext);
	const titleRef = useRef<HTMLInputElement>(null);

	const onFormSubmitHandler = (event: React.FormEvent) => {
		event.preventDefault();
		const title = titleRef.current!.value;

		if (title.trim().length === 0) {
			return;
		}

		todosCtx.addTodo(title);
	};

	return (
		<form onSubmit={onFormSubmitHandler} className={classes.form}>
			<label htmlFor="title">Todo title</label>
			<input type="text" id="title" ref={titleRef} />
			<button>Add Todo</button>
		</form>
	);
};

export default NewTodo;
