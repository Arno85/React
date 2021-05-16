import Todo from '../models/todo.model';
import React, { useState } from 'react';

interface TodosContextModel {
	items: Todo[];
	addTodo: (title: string) => void;
	removeTodo: (id: string) => void;
}

export const TodosContext = React.createContext<TodosContextModel>({
	items: [],
	addTodo: (title: string) => {},
	removeTodo: (id: string) => {}
});

const TodosContextProvider: React.FC = (props) => {
	const [ todos, setTodos ] = useState<Todo[]>([]);

	const addTodoHandler = (todoTitle: string) => {
		const newTodo: Todo = {
			id: new Date().toISOString(),
			title: todoTitle
		};

		setTodos((todos) => todos.concat(newTodo));
	};

	const removeTodoHandler = (todoId: string) => {
		setTodos((todos) => todos.filter((todo) => todo.id !== todoId));
	};

	const contextValue: TodosContextModel = {
		items: todos,
		addTodo: addTodoHandler,
		removeTodo: removeTodoHandler
	};

	return <TodosContext.Provider value={contextValue}>{props.children}</TodosContext.Provider>;
};

export default TodosContextProvider;
