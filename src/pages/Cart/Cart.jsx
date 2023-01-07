import React from 'react'
import CartProduct from '../../components/CartProduct/CartProduct'
import './styles.css'

const Cart = ({products, deleteProduct}) => {

  return (
    <div className='outlet'>
      <div className="cart">
        {products?.map(d => (<CartProduct key={d?.id} product={d} products={products} deleteProduct={deleteProduct}/>))}
      </div>
    </div>
  )
}

export default Cart