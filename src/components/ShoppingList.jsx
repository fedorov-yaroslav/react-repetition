function ShoppingList( { items = [] }) {
  return (
      <div className='shopping-list'>
        {items.map((item, index) =>
          <p key = {index}>{item}</p>
        )}
      </div>
  )
}

export default ShoppingList