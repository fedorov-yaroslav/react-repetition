import './App.css'
import { useState } from 'react'

function App() {
  const [numbers, setNumbers] = useState([])
  //стейт для хранения id для редактирования
  const [editingId, setEditingId] = useState('')
  const [editingValue, setEditingValue] = useState('')

  const generateNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100)
    setNumbers([...numbers, {id: Date.now(), value: randomNumber}])
  }

  const clearList = () => {
    setNumbers([])
  }

  const deleteNumber = (id) => {
    setNumbers(numbers.filter(number => number.id !== id))
  }

  const startEditing = (id, currentValue) => {
    setEditingId(id)
    setEditingValue(currentValue)
  }

  const endEditing = (id) => {
    setNumbers(numbers.map(num =>
        num.id === id ? {...num, value: Number(editingValue) } : num
    ))
    setEditingValue('')
    setEditingId('')
  }

  return (
      <div>
        <button onClick={generateNumber}>Сгенерировать число</button>
        <button onClick={clearList}>Очистить массив</button>
        <ol>
          {numbers.map(number => (
              <li
                  key={number.id}
              >
                {editingId === number.id ? (
                    <input
                        autoFocus
                        type='number'
                        value={editingValue}
                        onChange={(e) => setEditingValue(e.target.value)}
                        onBlur={() => endEditing(number.id)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === 'Escape') {
                            endEditing(number.id)
                          }
                        }
                        }
                    ></input>
                ) : (
                    <>
                      <span
                          onDoubleClick={() => startEditing(number.id, number.value)}
                      >
                        {number.value}
                      </span>
                      <button
                          onClick={() => deleteNumber(number.id)}>X</button>
                    </>
                )

                }
              </li>
          ))}
        </ol>
      </div>
  )
}

export default App

