import React from 'react'
import about from '../assets/about.jpeg'

const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12' id='about'>
        <div className='md:grid md:grid-cols-2 sm:py-16'>
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full justify-start py-6 md:py-0'>
                <div className='my-auto mx-6'>
                    <h2 className='text-4xl font-bold mb-4 primary-color'>About Me</h2>
                    <p className='text-base lg:text-lg'>
                      I am a multilingual individual with limited knowledge in Problem Solving using C++, Frontend Web 
                      development(HTML, CSS, JavaScript and ReactJS) and MySQL. Currently I am pursuing B. Tech in Computer 
                      Science with a average CGPA of 9.155 till now. I am a fast learner and an active listener. I can learn 
                      and implement new technologies as and when it is needed. I am aiming to enhance my skills in the 
                      field of Full Stack Web development by contributing to the tech industry.
                    </p>
                </div>
            </div>
            <img className='mx-auto rounded-3xl py-8 md:py-0' src={about} alt="About" width={300} height={300}/>
        </div>
    </div>
  )
}

export default About