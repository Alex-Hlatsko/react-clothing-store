import React from 'react'
import Section from '../../components/Section/Section'
import Product from '../../components/Product/Product';
import './styles.css'

const Hoodies = ({data, addProducts}) => {
  const dataSection = {
    title : "Hoodies",
    subtitle : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quisquam hic non voluptate aliquid unde, corporis cupiditate nisi aperiam praesentium? Nisi.",
    img : "./img/hoodies.jpg",
  }

  return (
    <div className='outlet'>
      <Section data={dataSection}/>
      <div className="products">
        {data?.map(d => (<Product key={d.id} data={d} addProducts={addProducts}/>))}
      </div>
    </div>
  )
}

export default Hoodies