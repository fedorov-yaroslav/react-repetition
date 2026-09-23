import { useState } from 'react'

//Сделай список задач: инпут + кнопка «Добавить» + сам список
function Todo() {
  const [input, setInput] = useState('')

  const [todos, setTodos] = useState([
	{id: 1, name: 'выбросить мусор', isDone: false},
	//
	{id: 2, name: 'выпить энергосика', isDone: false},
	{id: 3, name: 'Выпить молочка', isDone: false}
  ])

  const deleteTodo = (idToDelete) => {
	setTodos(prev => prev.filter(todo => todo.id !== idToDelete))
  }
  
  const addToDo = () => {
	if (input.trim()){
	  setTodos(prev => [...prev, {id: crypto.randomUUID(), name: input, isDone: false}])
	  setInput('')
	}
  }

  const toggleCompleted = (id) => {
	setTodos(prev => prev.map(todo => todo.id === id ?
	  {...todo, isDone: !todo.isDone}
	  : todo
	))
  }

  const clearCompleted = () => {
	setTodos(prev => prev.filter(todo => 
	!todo.isDone
	))
  }

  const [filter, setFilter] = useState('all')

  const filteredTodos = todos.filter(todo => {
	if (filter === 'active') return !todo.isDone
	if (filter === 'done') return todo.isDone
	return true
  })

  return (
	<div >
	  <button onClick={() => setFilter('all')} style={{fontWeight: (filter === 'all') ? 'bold' : 'normal'}}>Все</button>
	  <button onClick={() => setFilter('active')} style={{fontWeight: (filter === 'active') ? 'bold' : 'normal'}}>Активные</button>
	  <button onClick={() => setFilter('done')} style={{fontWeight: (filter === 'done') ? 'bold' : 'normal'}}>Выполненные</button>
	  <br /><br />
	  <input type="text" value={input} placeholder='Нажмякай текст' onChange={(e) => setInput(e.target.value)} />
	  <button onClick={addToDo}>Добавить</button>
	  <ul>
		{filteredTodos.map(toDo => (
		  <li key={toDo.id}>
			<span style={{textDecoration: toDo.isDone ? 'line-through' : 'none', color: toDo.isDone ? '#888' : 'black'}}>{toDo.name}</span>
			<button onClick={() => toggleCompleted(toDo.id)}>{toDo.isDone ? 'К выполнению' : 'Выполнено!'}</button>
			<button onClick={() => deleteTodo(toDo.id)}>Удалить задачу</button>
		  </li>
		))}
	  </ul>
	  <button onClick={clearCompleted}>Очистить выполненные</button>
	  <h4>Осталось выполнить задач: {todos.filter(todo => todo.isDone === false).length}</h4>
	</div>
  )
}

export default Todo