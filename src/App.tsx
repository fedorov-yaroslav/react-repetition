import { useState, useEffect } from "react";

interface Task {
  id: string
  text: string
  completed: boolean
}

const INITIAL_TASKS: Task[] = [
  { id: '1', text: "Изучить базовый React", completed: false },
  { id: '2', text: "Пройти собеседование на стажировку", completed: false },
  { id: '3', text: "Разобраться с хуком useEffect", completed: false },
];

export default function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem('my_todo_tasks')

    return savedTasks ? JSON.parse(savedTasks) : INITIAL_TASKS  
  });


  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>("all"); // 'all', 'active', 'completed'
  const [inputValue, setInputValue] = useState('')

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active'){
      return !task.completed
    }
    else if (filter === 'completed'){
      return task.completed
    }
    return true
  })

  const activeTasksCount = tasks.filter((task) => task.completed === false).length

  const handleCompletion = (id: string) => {
    setTasks(
      tasks.map((task) => 
        task.id === id
          ? {...task, completed: !task.completed}
          : task
      )
    )
  }

  const addTask = () => {
    setTasks([...tasks, {id: crypto.randomUUID(), text: inputValue, completed: false}]);
    setInputValue('')
  }

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  useEffect(() => {
    localStorage.setItem('my_todo_tasks', JSON.stringify(tasks))
  }, [tasks])

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={addTask}>Добавить</button>
      <h2>Мой список задач</h2>
      <p>{activeTasksCount ? `Осталось выполнить задач: ${activeTasksCount}` : '🎉 Все задачи выполнены!'}</p>
      
      <div style={{ marginBottom: "15px" }}>
        <button onClick={() => setFilter('all')}>Все</button>
        <button onClick={() => setFilter('active')} style={{ margin: "0 5px" }}>Активные</button>
        <button onClick={() => setFilter('completed')}>Выполненные</button>
      </div>

      <ul>
        {filteredTasks.map(task => 
          <li style={{textDecoration: task.completed 
            ? 'line-through' 
            : 'none', cursor: 'pointer',
            listStyleType: 'none',
          }} 
            key={task.id} 
            onClick={() => handleCompletion(task.id)}>
              <input type="checkbox" checked={task.completed} readOnly/>
              {task.text}
              <button onClick={(e) => {
                e.stopPropagation()
                deleteTask(task.id)
              }}>❌</button>
          </li>
        )}
      </ul>
    </div>
  );
}
