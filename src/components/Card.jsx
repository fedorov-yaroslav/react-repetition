function Card({ title, children }){
  return (
      <>
        <div style = {{border: '1px solid gray', padding: '20px', width: '400px'}}>
          <h2>{title}</h2>
          <div>
            {children}
          </div>
          <hr/>
        </div>
      </>
  )
}

export default Card