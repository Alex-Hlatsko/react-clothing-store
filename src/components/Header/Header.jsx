import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { MdOutlineClose } from 'react-icons/md'
import { HiMenuAlt2 } from 'react-icons/hi'
import './styles.css'

const Header = () => {
  const [menuState, setMenuState] = useState(false);
  return (
    <>
    <div className='header flex justify-between items-center'>
      <div className="logo flex items-center">
        <Link to='/'><img className='logo mr-2' src="./img/logo.png" alt="logo" /></Link>
        <Link to='/'><span className='logo'>Clothing</span></Link>
      </div>
      <div className="flex">
        <Link to='/cart'><AiOutlineShoppingCart size={28}/></Link>
        {menuState ? <MdOutlineClose className='burger ml-5' size={32} onClick={()=>setMenuState((menuState)=>menuState=!menuState)}/>  : <HiMenuAlt2 className='burger ml-5' size={32} onClick={()=>setMenuState((menuState)=>menuState=!menuState)}/>}
      </div>
    </div>
    {menuState && 
    <div className='navbar navbar_mobile flex flex-col items-center justify-center'>
      <NavLink className="navbar_item" onClick={()=>setMenuState((menuState)=>menuState=!menuState)} to='/'>Home</NavLink>
      <NavLink className="navbar_item" onClick={()=>setMenuState((menuState)=>menuState=!menuState)} to='/hoodie'>Hoodie</NavLink>
      <NavLink className="navbar_item" onClick={()=>setMenuState((menuState)=>menuState=!menuState)} to='/t-shirts'>T-shirts</NavLink>
      <NavLink className="navbar_item" onClick={()=>setMenuState((menuState)=>menuState=!menuState)} to='/shoes'>Shoes</NavLink>
      <NavLink className="navbar_item" onClick={()=>setMenuState((menuState)=>menuState=!menuState)} to='/about'>About</NavLink>
      <NavLink className="navbar_item" onClick={()=>setMenuState((menuState)=>menuState=!menuState)} to='/shoes'>Contact</NavLink>
    </div>}
    </>
  )
}

export default Header