import React from 'react'
import Section from '../../components/Section/Section'
import Product from '../../components/Product/Product'

const Tshirts = ({data, addProducts}) => {
  const dataSection = {
    title : "T-shirts",
    subtitle : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quisquam hic non voluptate aliquid unde, corporis cupiditate nisi aperiam praesentium? Nisi.",
    img : "./img/tshirts.jpg",
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

export default Tshirts