import React from 'react'
import meImage from '../assets/face.png'
import Button from './Button'

export default function Presentation() {
  return (
    <div>
        <div className='flex justify-center items-center pt-8'>
         <img src={meImage} loading='lazy' className='rounded-full hover:static shadow-md lg:h-56 md:h-44 h-36 hover:h-72 transition-height duration-500'></img>
        </div>
        <div className='flex justify-center items-center px-3'>
            <h1 className='text-4xl md:text-7xl lg:text-7xl max-w-3xl m-4 sm:m-8 font-bold text-center'>
              <p className='text-purple-600 font-extrabold'>I love to develop</p>
               things that can help people</h1>
        </div>
        <div className='flex justify-center items-center lg:text-4xl p-3 '>
          <p className='text-center max-w-3xl mb-4 text-xl font-medium text-black/40'>
          My name is Erasmo and my passion is web and app development using React and Flutter. I’m a junior developer who has worked on various projects that showcase my skills and creativity.
          </p>
        </div>
        <div className='flex justify-center'>
          <Button title="contact me"></Button>
          <Button title="My CV"></Button>
        </div>
    </div>
  )
}
