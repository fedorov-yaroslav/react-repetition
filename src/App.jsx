import { useState, useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    fetch('http://localhost:3001/todos')
        .then((res) => res.json())
        .then((data) => setTodos(data))
  }, [])

  const [todos, setTodos] = useState([])

  const [newTodo, setNewTodo] = useState('')

  const addTodo = () => {
    if (!newTodo.trim()) return;

    fetch('http://localhost:3001/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: newTodo, completed: false }) // id сервер создаст сам
    })
        .then((res) => res.json())
        .then((createdTodo) => {
          // Только после ответа сервера обновляем экран
          setTodos([...todos, createdTodo]);
          setNewTodo('');
        });
  };

  const deleteTodo = (id) => {
    fetch(`http://localhost:3001/todos/${id}`, {
      method: 'DELETE',
    })
        .then((res) => setTodos(todos.filter(todo => todo.id !== id)))
  }

  const handleToggle = (id) => {
    // Находим текущую задачу в списке
    const todoToUpdate = todos.find(todo => todo.id === id);
    if (!todoToUpdate) return;

    fetch(`http://localhost:3001/todos/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed: !todoToUpdate.completed }) // отправляем новое состояние
    })
        .then((res) => res.json())
        .then((updatedTodo) => {
          // Обновляем состояние в React данными, которые прислал сервер
          setTodos(prevTodos =>
              prevTodos.map(todo => todo.id === id ? updatedTodo : todo)
          );
        });
  };

  return (
    <>
      <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTodo()}
      />
      <button onClick={addTodo}>Добавить</button>
      <ul>
        {todos.map(todo => (
            <li key={todo.id}>
              <label className={'checkbox-wrapper'}>
                <input type="checkbox"
                       checked={todo.completed}
                       onChange={() => handleToggle(todo.id)}
                />
                <span className={todo.completed ? ' completed' : ''}>{todo.title}</span>

                <button className='delete-button' onClick={() => deleteTodo(todo.id)}>
                  <svg width='0.8rem' id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110.61 122.88"><title>trash</title><path d="M39.27,58.64a4.74,4.74,0,1,1,9.47,0V93.72a4.74,4.74,0,1,1-9.47,0V58.64Zm63.6-19.86L98,103a22.29,22.29,0,0,1-6.33,14.1,19.41,19.41,0,0,1-13.88,5.78h-45a19.4,19.4,0,0,1-13.86-5.78l0,0A22.31,22.31,0,0,1,12.59,103L7.74,38.78H0V25c0-3.32,1.63-4.58,4.84-4.58H27.58V10.79A10.82,10.82,0,0,1,38.37,0H72.24A10.82,10.82,0,0,1,83,10.79v9.62h23.35a6.19,6.19,0,0,1,1,.06A3.86,3.86,0,0,1,110.59,24c0,.2,0,.38,0,.57V38.78Zm-9.5.17H17.24L22,102.3a12.82,12.82,0,0,0,3.57,8.1l0,0a10,10,0,0,0,7.19,3h45a10.06,10.06,0,0,0,7.19-3,12.8,12.8,0,0,0,3.59-8.1L93.37,39ZM71,20.41V12.05H39.64v8.36ZM61.87,58.64a4.74,4.74,0,1,1,9.47,0V93.72a4.74,4.74,0,1,1-9.47,0V58.64Z"/></svg>
                  <p>Удалить</p>
                </button>
              </label>
            </li>
        ))}
      </ul>
    </>
  )
}

export default App