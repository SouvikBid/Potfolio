import React from 'react'
import myimg from '../assets/profile.jpeg'
import {TypeAnimation} from "react-type-animation"

const Hero = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black'>
        <div className='my-auto mx-auto w-[200px] h-auto'>
            <img src={myimg} alt="my-image" />
        </div>

        <div className='col-span-2 px-5 my-auto'>
            <h1 className='text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                <span className='primary-color'>I am a <br/>
                <TypeAnimation
                sequence={[
                    "Frontend Developer", 2000,
                    "Coding Problem Solver", 2000,
                    "Full Stack Developer", 2000,
                ]}
                wrapper='span'
                speed={50}
                repeat={Infinity}
            /></span>
            </h1>
            <p className='text-white sm:text-lg my-6 lg:text-xl'>
                My name is Souvik Bid. I am currently studying B.Tech 4th year of Techno International Batanagar. I am aspiring to 
                be a Web Developer.
            </p>
            <div className='my-8'>
                <a href='/' className='px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-red-600 text-white'>
                    Download CV
                </a>
                <a href='#contact' className='px-6 py-3 w-full rounded-xl mr-4 
                    border border-x-gray-400 hover:bg-gradient-to-br from-orange-500 to-red-600 text-white hover:border-none'>
                    Contact
                </a>
            </div>
        </div>
    </div>
  )
}

export default Hero