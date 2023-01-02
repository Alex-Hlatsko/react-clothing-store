import React from 'react'
import Section from '../../components/Section/Section'

const About = () => {
  const dataSection = {
    title : "Meet by clothes",
    subtitle : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quisquam hic non voluptate aliquid unde, corporis cupiditate nisi aperiam praesentium? Nisi.",
    img : "./img/about.jpg",
  }

  return (
    <div className='outlet'>
      <Section data={dataSection}/>
      About
    </div>
  )
}

export default About