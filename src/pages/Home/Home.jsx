import React from 'react'
import Section from '../../components/Section/Section'
import Catalog from '../../components/Catalog/Catalog'

const Home = () => {
  const dataSection = {
    title : "Meet by clothes",
    subtitle : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quisquam hic non voluptate aliquid unde, corporis cupiditate nisi aperiam praesentium? Nisi.",
    img : "./img/home.jpg",
  }

  const catalogHoodies = {
    title : "Hoodies",
    subtitle : "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img : "./img/hoodies.jpg",
    link : "hoodie",
  }
  
  const catalogTshirts = {
    title : "Tshirts",
    subtitle : "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img : "./img/tshirts.jpg",
    link : "t-shirts",
  }

  const catalogShoes = {
    title : "Shoes",
    subtitle : "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img : "./img/shoes.jpg",
    link : "shoes",
  }
  return (
    <div className='outlet'>
      <Section data={dataSection}/>
      <div className="outlet_content mb-12 mt-4">
        <div className="flex flex-wrap justify-center">
          <Catalog data={catalogHoodies}/>
          <Catalog data={catalogTshirts}/>
          <Catalog data={catalogShoes}/>
        </div>
      </div>
    </div>
  )
}

export default Home