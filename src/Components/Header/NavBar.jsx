import React from 'react'
import Logo from '../../Assets/Logo';


const NavBar = () => {

  const textStyle = {
    fontFamily: 'Inter',
  }

  return (
    <div className='flex flex-row max-h-24 bg-black h-full w-full items-center'>
      {/* LOGO */}
      <div className=' border-gray-30 bg-black border rounded-full '>
        <Logo />
      </div>
      <ul className='flex flex-row flex-1 items-center justify-between text-white px-6 border-gray-300 border h-12 rounded-full '>
        <li style={textStyle} >ABOUT</li>
        <li style={textStyle} >PORTFOLIO</li>
        <li style={textStyle} >CONTACT</li>
      </ul>
    </div>
  )
}

export default NavBar
