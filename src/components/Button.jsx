import './Button.css'

function Button({ text, color }) {
  return (
      <>
        <button className={color}>{text}</button>
      </>
  )
}

export default Button