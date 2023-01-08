import React from 'react'
import Section from '../../components/Section/Section'

const About = () => {
  const dataSection = {
    title : "About",
    subtitle : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quisquam hic non voluptate aliquid unde, corporis cupiditate nisi aperiam praesentium? Nisi.",
    img : "./img/about.jpg",
  }

  return (
    <div className='outlet'>
      <Section data={dataSection}/>
      <div className="outlet_content mb-12 pt-5">
        <p className='text-base text-zinc-200 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, porro sit ex dolorem ducimus quis veritatis beatae minus tempora reiciendis ipsum quos placeat dignissimos repellendus id at deleniti harum fugit excepturi molestias! Sunt quod id delectus.</p>
      </div>
    </div>
  )
}

export default About