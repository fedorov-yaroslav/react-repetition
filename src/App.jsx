import './App.css'
import UserCard from './components/UserCard'
import Product from './components/Product'
import Button from './components/Button'
import Layout from './components/Layout'

function App() {

  return (
      <>
        <UserCard name='Маша'/>
        <UserCard name='Петя'/>
        <UserCard name='Вася'/>
        <hr/>
        <Product title='Абрикосы' isInStock={false} />
        <Product title='Бананы' isInStock={true} />
        <hr/>
        <Button text='Кнопочка' color='red'/>
        <Button text='Нажми меня' color='green'/>
        <Button text='Моя кнопка' color='blue'/>
        <Button text='Тык-тык'/>
        <hr/>
        <Layout title='Тест обертки'>
          <UserCard name='Вася Иванов'/>
            <Product title='Урановая руда' isInStock={false} />
        </Layout>
      </>
  )
}

export default App