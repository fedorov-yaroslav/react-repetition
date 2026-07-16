function Status ({ isLoggedIn = false}) {
  return (
      <>
        {isLoggedIn
            ? <p className = 'green-text'>Добро пожаловать!</p>
            : <p className = 'orange-text'>Пожалуйста, войдите</p>}
      </>
  )
}

export default Status;