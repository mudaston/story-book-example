interface Todo {
	id: number
	name: string
}

const store: Array<Todo> = []

const getTodos = () => {
	return store.map((todo) => ({ ...todo }))
}

const addTodo = (todo: Omit<Todo, 'id'>) => {
	const id = Math.max(...store.map((todo) => todo.id), 0) + 1

	const todoAdd: Todo = {
		id,
		...todo,
	}

	store.push(todoAdd)
}

export { getTodos, addTodo }
