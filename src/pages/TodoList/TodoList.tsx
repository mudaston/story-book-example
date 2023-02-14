import React from 'react'

import { getTodos, addTodo } from './todo'

const TodoList = () => {
	const [todos, setTodos] = React.useState(() => getTodos())
	const newTodo = React.useRef('')

	const addTodoHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
		const { code } = e

		if (code !== 'Enter') return

		addTodo({
			name: newTodo.current,
		})

		setTodos(getTodos())
	}

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target

		newTodo.current = value
	}

	return (
		<div>
			<label>
				Add todo
				<input
					type="text"
					onKeyDown={addTodoHandler}
					onChange={onChangeHandler}
				/>
			</label>
			<ul>
				{todos.map(({ id, name }) => (
					<li key={id}>{name}</li>
				))}
			</ul>
		</div>
	)
}

export default TodoList
