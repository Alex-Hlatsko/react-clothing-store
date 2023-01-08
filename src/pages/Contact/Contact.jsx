import React from 'react'
import Section from '../../components/Section/Section'
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai'
import './styles.css'

const Contact = () => {
  const dataSection = {
    title : "Contact",
    subtitle : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quisquam hic non voluptate aliquid unde, corporis cupiditate nisi aperiam praesentium? Nisi.",
    img : "./img/contact.jpg",
  }
  return (
    <div className='outlet'>
      <Section data={dataSection}/>
      <div className="outlet_content mb-12 pt-5 text-center flex flex-col items-center">
        <p className='text-base text-zinc-200 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, porro sit ex dolorem ducimus quis veritatis beatae minus tempora reiciendis ipsum quos placeat dignissimos repellendus id at deleniti harum fugit excepturi molestias! Sunt quod id delectus.</p>
        <div className="contact_info flex flex-wrap justify-center ">
          <div className="flex items-center mx-3">
            <AiFillPhone/>
            <p className='ml-1'>+12 12 32 111 45</p>
          </div>
          <div className="flex items-center mx-3">
            <AiOutlineMail/>
            <p className='ml-1'>example@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact