import React from 'react'
import './styles.css'
import Section from '../../components/Section/Section'
import Product from '../../components/Product/Product';

const Hoodies = ({data}) => {
  const dataSection = {
    title : "Meet by clothes",
    subtitle : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quisquam hic non voluptate aliquid unde, corporis cupiditate nisi aperiam praesentium? Nisi.",
    img : "./img/hoodies.jpg",
  }

  return (
    <div className='outlet'>
      <Section data={dataSection}/>
      <div className="products">
        {data?.map(d => (<Product key={d.id} data={d}/>))}
      </div>
    </div>
  )
}

export default Hoodies