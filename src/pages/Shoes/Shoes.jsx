import React from 'react'
import Section from '../../components/Section/Section'
import Product from '../../components/Product/Product'

const Shoes = ({data, addProducts}) => {
  const dataSection = {
    title : "Shoes",
    subtitle : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quisquam hic non voluptate aliquid unde, corporis cupiditate nisi aperiam praesentium? Nisi.",
    img : "./img/shoes.jpg",
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

export default Shoes