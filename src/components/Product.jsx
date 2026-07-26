import './Product.css'

function Product({ title, isInStock }) {
  return (
      <>
        <p className={isInStock ? '' : 'outOfStock'}>{ title }</p>
      </>
  )
}

export default Product