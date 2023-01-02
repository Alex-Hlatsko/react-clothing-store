import React from 'react'
import Section from '../../components/Section/Section'

const Tshirts = () => {
  const dataSection = {
    title : "Meet by clothes",
    subtitle : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quisquam hic non voluptate aliquid unde, corporis cupiditate nisi aperiam praesentium? Nisi.",
    img : "./img/tshirts.jpg",
  }

  return (
    <div className='outlet'>
      <Section data={dataSection}/>
      Tshirts
    </div>
  )
}

export default Tshirts