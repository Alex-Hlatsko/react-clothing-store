import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const Catalog = ({data}) => {
  return (
    <Link to={`./${data.link}`} className='catalog'>
        <div className="catalog_bg" style={{backgroundImage: `url(${data.img})`}}></div>
        <div className="catalog_content">
            <h1 className='d text-lg'>{data.title}</h1>
            <p className='d text-sm text-zinc-300'>{data.subtitle}</p>
        </div>
    </Link>
  )
}

export default Catalog