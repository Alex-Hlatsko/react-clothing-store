import React from 'react'
import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import './styles.css'

const Layout = ({products}) => {
  console.log(products)
  return (
    <div className='layout'>
      <Header products={products}/>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout