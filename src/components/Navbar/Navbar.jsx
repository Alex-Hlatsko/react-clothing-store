import React from 'react'
import './styles.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar flex flex-col items-center'>
      <div className="logo">
        <NavLink className="mb-8 flex items-center">
          <img src="" alt="logo" />
          <span className='logo'>Clothing</span>
        </NavLink>
      </div>
      <NavLink className="navbar_item" to='/'>Home</NavLink>
      <NavLink className="navbar_item" to='/hoodie'>Hoodie</NavLink>
      <NavLink className="navbar_item" to='/t-shirts'>T-shirts</NavLink>
      <NavLink className="navbar_item" to='/shoes'>Shoes</NavLink>
      <NavLink className="navbar_item" to='/about'>About</NavLink>
      <NavLink className="navbar_item" to='/shoes'>Contact</NavLink>
    </div>
  )
}

export default Navbar