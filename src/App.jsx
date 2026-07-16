import { useState } from 'react'
import './App.css'
import Status from './components/Status.jsx'
import Calculator from './components/Calculator.jsx'
import ShoppingList from './components/ShoppingList.jsx'
import Card from './components/Card.jsx'
import UserProfile from './components/UserProfile.jsx'

const products = ['Хлеб', 'Молоко', 'Яйца']

const userData = {
  name: 'Иван',
  age: 30,
  city: 'Москва'
}

function App() {
  return (
      <main>
        <Calculator a={10} b={5} />
        <hr/>
        <Status isLoggedIn = { true } />
        <Status isLoggedIn = { false } />
        <hr/>
        <ShoppingList items = { products }/>
        <hr/>
        <Card title = 'Моя карточка'>
          <p>Тут ребенок</p>
          <button>И еще кнопка внутри</button>
        </Card>
        <UserProfile user = { userData }/>
      </main>
  )
}

export default App
