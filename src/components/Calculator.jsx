function Calculator( { a = 1, b = 1 }){
  return (
      <>
        <p>Сумма: {a} + {b} = {a + b} </p>
        <p>Разность: {a} - {b} = {a - b} </p>
        <p>Произведение: {a} * {b} = {a * b} </p>
        <p>Частное: {a} / {b} = {a / b} </p>
      </>
  )
}

export default Calculator;