import { useState } from 'react'
import './App.css'

function App() {
  const [topics, setTopics] = useState([
    { id: 1, name: 'HTML', done: false },
    { id: 2, name: 'CSS', done: false },
    { id: 3, name: 'Javascript', done: false },
    { id: 4, name: 'React', done: false }
  ])

  const deleteTopic = (id) => {
    setTopics(topics.filter(topic => topic.id !== id))
  }

  const toggleDone = (id) => {
    setTopics(topics.map(topic =>
    topic.id === id ? { ...topic, done: !topic.done} : topic
    ))
  }

  const [input, setInput] = useState('')

  const addTopic = () => {
    if (input.trim()){
      setTopics([...topics, {id: Date.now(), name: input, done: false}]);
      setInput('')
    }
  }

  const [toShowCompleted, setToShowCompleted] = useState(false)

  const showCompleted = () => {
    setToShowCompleted(prev => !prev)
  }

  const filteredTopics = toShowCompleted
      ? topics.filter(topic => topic.done)
      : topics

  return (
    <div className='container'>
      <button onClick={showCompleted}>{toShowCompleted ? 'Показать все' : 'Показать выполненные'}</button>
      <ul className='list'>
        {filteredTopics.map(topic => (
            <li key={topic.id} >
                <p
                  className={`list-text ${topic.done ? 'done' : ''}`}
                >
                  {topic.name}
                </p>
              <button onClick={() => deleteTopic(topic.id)}>❌ Удалить</button>
              <button onClick={() => toggleDone(topic.id)}>{topic.done ? '✅' : '⬜'}</button>
            </li>
      ))}

      </ul>
      <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTopic()}
          placeholder='Новая тема'
      />
      <button onClick={addTopic}>Добавить тему</button>
      <hr/>
      <p>
        Всего тем: {topics.length},
        Выполнено: {topics.filter(topic => topic.done === true).length},
        Осталось: {topics.filter(topic => topic.done === false).length}
      </p>
    </div>
  )
}

export default App