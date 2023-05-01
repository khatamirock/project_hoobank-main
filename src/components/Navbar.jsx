import React from 'react'
import { useState } from 'react'
import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'
import styles, { layout } from '../style'


const Navbar = () => {
  const kire = navLinks.map((nav, index) => {
    return (
      <li key={nav.id} className={`py-6 font-bold sm:py-0  font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white
      
`} >
        <a href={`#${nav.id}`}>{nav.title}</a>
      </li>)

  })

  const [togleNav, setTogleNav] = useState(false)

  return (
    <div className='w-full flex py-6 justify-between items-center navbar' >
      <img src={logo} alt="logoes" className='w-[124px] h-[32px]' />'
      <ul className='list-none sm:flex hidden justify-end items-center flex-1' >
        {kire}
      </ul>

      <div className={`smList relative`}>
        <ul className={`sm:hidden flex flex-1 justify-end items-center `} >
          <img src={togleNav ? close : menu} onClick={() => {
            setTogleNav(!togleNav)
          }} className='w-[28px] h-[28px] object-contain' />
        </ul>


        <ul className={`shadow-2xl absolute left-[-120px] sidebar bg-[#37b0b4] rounded-md mt-[20px] ${togleNav ? 'block ' : 'hidden'} `}>
          <div className="p-6 ">{kire}</div>

        </ul>

      </div>




    </div>
  )
}

export default Navbar