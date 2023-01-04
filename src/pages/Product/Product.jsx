import React from 'react'
import {useParams} from 'react-router-dom';
import './styles.css'

const Product = ({data}) => {
  const {id} = useParams();
  const p = data?.find(d => d.id === id)

  return (
    <div className='outlet'>
      <div className="productd">
        <div className="productd_img">
          <img src={p?.image} alt="img" />
        </div>
        <div className="productd_content">
          <p className='text-zinc-500'>#{p?.id}</p>
          <h1 className='text-2xl mb-3'>{p?.title}</h1>
          <p className='text-zinc-400 font-normal mb-5'>{p?.description}</p>
          <div className="flex justify-between">
            <p className='font-normal mb-5'><span className='text-zinc-400'>Size:</span> {p?.size}</p>
            <p className='font-normal mb-5'><span className='text-zinc-400'>Price:</span> {p?.price}$</p>
          </div>
          <span className='btn'>Buy</span>
        </div>
      </div>
    </div>
  )
}

export default Product