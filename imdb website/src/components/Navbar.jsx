


import React from 'react'
import Logo from '../assets/Logo2.png'

import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex border space-x-8 items-center pl-4 py-4'>
        
        <img className='w-[80px] h-[80px] rounded-full' src={Logo} alt="Film Logo" />
        <Link to="/" className='text-blue-700 text-2xl font-bold'>Movies</Link>
        <Link to="/watchlist" className='text-blue-700 text-2xl font-bold'>Watchlist</Link>
       
    </div>
  )
}

export default Navbar