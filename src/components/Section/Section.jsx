import React from 'react'
import './styles.css'

const Section = ({data}) => {
  return (
    <div className='section'>
      <div className="section_bg" style={{backgroundImage: `url(${data.img})`}}></div>
      <div className="section_content">
        <h1 className="section_title">{data.title}</h1>
        <p className="section_subtitle">{data.subtitle}</p>
      </div>
    </div>
  )
}

export default Section