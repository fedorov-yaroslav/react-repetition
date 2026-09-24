import { useState } from 'react'

import { ConditionContext } from './components/ConditionContext.js'

import { Room } from './components/Room.jsx'

export default function App () {
  const [status, setStatus] = useState('Выключен')

  const toggleStatus = () => {
    if (status === 'Выключен'){
      setStatus('Включен')
    }
    else setStatus('Выключен')
  }

  return (
    <>
      <ConditionContext.Provider value={{ status: status, toggleStatus: toggleStatus }}>
        <h1>Умный дом</h1>
        <Room />
      </ConditionContext.Provider>
    </>
  )
}