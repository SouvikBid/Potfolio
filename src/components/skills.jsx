import React from 'react'
import cpp from '../assets/CPP.jpeg'
import html from '../assets/HTML.jpeg'
import css from '../assets/CSS.jpeg'
import js from '../assets/JS.jpeg'
import react from '../assets/React.jpeg'
import sql from '../assets/SQL.jpeg'

const Skills = () => {
  return (
    <div className='border border-gray-600 bg-black text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-3
        place-items-center md:flex md:justify-between md:items-center'>
        <h2 className='text-gray-700 text-xl md:text-4xl font-bold m-4'>
            My<br/> Tech <br/> Stack
        </h2>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={cpp} alt="CPP" width={100} height={100}/>
            <p className='mt-2'>C++</p>
        </div>
        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={html} alt="HTML" width={100} height={100}/>
            <p className='mt-2'>HTML</p>
        </div>
        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={js} alt="JS" width={100} height={100}/>
            <p className='mt-2'>JavaScript</p>
        </div>
        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={css} alt="CSS" width={100} height={100}/>
            <p className='mt-2'>CSS</p>
        </div>
        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={react} alt="ReactJS" width={100} height={100}/>
            <p className='mt-2'>ReactJS</p>
        </div>
        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
            <img src={sql} alt="MySQL" width={100} height={100}/>
            <p className='mt-2'>MySQL</p>
        </div>
    </div>
    
  )
}

export default Skills