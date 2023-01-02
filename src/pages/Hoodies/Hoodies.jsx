import React from 'react'
import Section from '../../components/Section/Section'

const Hoodies = () => {
  const dataSection = {
    title : "Meet by clothes",
    subtitle : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quisquam hic non voluptate aliquid unde, corporis cupiditate nisi aperiam praesentium? Nisi.",
    img : "./img/hoodies.jpg",
  }

  return (
    <div className='outlet'>
      <Section data={dataSection}/>
      Hoodies
    </div>
  )
}

export default Hoodies