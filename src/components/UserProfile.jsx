function UserProfile({ user =  {name: 'Гость', age: 0, city: 'Неизвестно'}}) {
  return (
      <>
        <p className='grey-text'>
          Пользователь: {user.name}, возраст: {user.age}, из города {user.city}
        </p>
      </>
  )
}

export default UserProfile;