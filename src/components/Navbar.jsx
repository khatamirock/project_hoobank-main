import React from 'react'
import { useState } from 'react'
import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'
import styles, { layout } from '../style'


const Navbar = () => {
  const kire = navLinks.map((nav, index) => {
    return (
      <li key={nav.id} className={`py-6 font-bold sm:py-0
        font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white
      `} >
        <a href={`#${nav.id}`}>{nav.title}</a>
      </li>)

  })

  const [togleNav, setTogleNav] = useState(false)

  return (
    <div className=' bg-[#212A3E] sm:hidden p-4 flex justify-between items-center navbar' >
      <img src={logo} alt="logoes" className='w-[124px] h-[32px]' />'
      {/* the hoobank logo */}

      <div className={`smList relative bg-black`}>
        <div className={`sm:hidden flex flex-1 justify-end items-center fixed `} >
          <img src={togleNav ? close : menu} onClick={() => {
            setTogleNav(!togleNav)
          }} className='w-[28px] h-[28px] object-contain' />
        </div>


        <ul className={`shadow-2xl absolute left-[-120px] sidebar bg-[#37b0b4] 
        rounded-md mt-[20px] ${togleNav ? 'block ' : 'hidden'} fixed`}>
          <div className="p-6 ">{kire}</div>

        </ul>

      </div>




    </div>
  )
}

export default Navbar