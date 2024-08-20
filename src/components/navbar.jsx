import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='border border-gray-600 bg-black text-gray-400 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center'>

        <h1 className='text-3xl font-bold primary-color ml-4'>SOUVIK BID</h1>
        <ul className='hidden md:flex'>
            <li className='p-5'><a href='#about'>About</a></li>                
            <li className='p-5'><a href='#contact'>Contact</a></li>
        </ul>    

        
    </div>
  )
}

export default Navbar