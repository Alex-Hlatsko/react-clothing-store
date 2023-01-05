import React from 'react'
import { useLocation } from 'react-router-dom'
import CartProduct from '../../components/CartProduct/CartProduct'
import './styles.css'

const Cart = () => {
  const location = useLocation()
  const { data } = location?.state

  return (
    <div className='outlet'>
      <div className="cart">
        {data?.map(d => (<CartProduct key={d?.id} product={d}/>))}
      </div>
    </div>
  )
}

export default Cart