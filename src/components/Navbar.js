import React from 'react'
import logo from '../img/logo-dark.png'

const Navbar = () => {
  return (
    <div className='border-b-2 border-slate-200'>
        <nav className='relative mx-auto p-3 md:mx-20'>
        {/* Flex Container */}
            <div className='flex items-center justify-between'>
                {/* Logo */}
                <div className='p-2 bg-gradient-to-r from-slate-200 to-slate-50 rounded-full shadow-primary hover:scale-105 transition duration-300 ease-in-out hover:shadow-lg'>
                    <img src={logo} alt=''/>
                </div>
                {/* Menu items */}
                <div className='hidden md:flex text-xs space-x-10 font-sans font-semibold'>
                    <a href='#' className='hover:text-primaryRed'>HOME</a>
                    <a href='#' className='hover:text-primaryRed'>FEATURES</a>
                    <a href='#' className='hover:text-primaryRed'>PORTFOLIO</a>
                    <a href='#' className='hover:text-primaryRed'>RESUME</a>
                    <a href='#' className='hover:text-primaryRed'>CONTACTS</a>
                </div>
                {/* Button */}
                <a className='group md:block p-4 px-5 shadow-primary rounded baseline bg-gradient-to-r from-slate-200 to-slate-50
                 hover:from-primaryRed hover:to-primaryRed'>
                    <p className=' text-primaryRed text-sm font-medium font-serif group-hover:text-white'>CONTACT ME</p>
                </a>
            </div>
        </nav>
    </div>    
  )
}

export default Navbar