import React from 'react'
import Logo from '../../Assets/Logo';

const NavBar = () => {

  return (
    <div className='flex flex-row max-h-24 h-full gap-1 w-full items-center sticky'>
      {/* LOGO */}
      <Logo />
      <ul className=' bg-[#161616] flex flex-row flex-1 items-center justify-between text-white px-20 border-[#262626] border h-12 rounded-full cursor-pointer '>
        <li className='hover:border-b-4 hover:border-b-orange-500 border-b-4 border-transparent '>ABOUT</li>
        <li className='hover:border-b-4 hover:border-b-orange-500 border-b-4 border-transparent '>PORTFOLIO</li>
        <li className='hover:border-b-4 hover:border-b-orange-500 border-b-4 border-transparent '>CONTACT</li>
      </ul>
    </div>
  )
}

export default NavBar
