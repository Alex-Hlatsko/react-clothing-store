import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const Product = ({data}) => {
  return (
    <div className='product'>
        <div className="product_img" style={{backgroundImage: `url(${data.image})`}} />
        <div className="product_content">
                <h1 className="product_title text-lg">{data.title}</h1>
            <div className="product_text flex justify-between">
                <p className="product_subtitle"><span className='text-zinc-400'>Size:</span> {data.size}</p>
                <p className="product_price"><span className='text-zinc-400'>Price:</span> {data.price}$</p> 
            </div>
            <div className="product_btns flex justify-between mt-3">
                <span className='btn'>Buy</span>
                <Link to={`./product/${data.id}`} className='btn_det'>Details</Link>
            </div>
        </div>
    </div>
  )
}

export default Product