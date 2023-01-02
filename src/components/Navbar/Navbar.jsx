import React from 'react'
import './styles.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar navbar_none flex flex-col items-center'>
      <div className="logo">
        <NavLink className="mb-8 flex items-center">
          <img className='logo mr-2' src="./img/logo.png" alt="logo" />
          <span className='logo'>Clothing</span>
        </NavLink>
      </div>
      <NavLink className="navbar_item" to='/'>Home</NavLink>
      <NavLink className="navbar_item" to='/hoodie'>Hoodie</NavLink>
      <NavLink className="navbar_item" to='/t-shirts'>T-shirts</NavLink>
      <NavLink className="navbar_item" to='/shoes'>Shoes</NavLink>
      <NavLink className="navbar_item" to='/about'>About</NavLink>
      <NavLink className="navbar_item" to='/contact'>Contact</NavLink>
    </div>
  )
}

export default Navbar