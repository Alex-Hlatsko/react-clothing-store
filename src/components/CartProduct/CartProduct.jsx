import React from 'react'
import { IoIosCloseCircle } from 'react-icons/io'
import './styles.css'

const cartProduct = ({product, deleteProduct}) => {
    console.log(product)
  return (
    <div className='cart_product flex justify-between items-center'>
        <img src={product?.image} alt="img" />
        <div className="cart_product_content">
            <h1 className='cart_product_title'>{product?.title}</h1>
            <p className='cart_product_subtitle'><span className='text-zinc-400'>Size:</span> {product?.size}</p>
        </div>
        <p className='cart_product_subtitle'>{product?.price}$</p>
        <IoIosCloseCircle className='btn_close' size={28} onClick={() => {deleteProduct(product.id)}}/>
    </div>
  )
}

export default cartProduct