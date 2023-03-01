import React from 'react'
import python from '../assets/python.png'
import js from '../assets/js.jpeg'
import dart from '../assets/dart.png'
import flutter from '../assets/flutter.png'
import fastapi from '../assets/fastapi.png'
import reacticon from '../assets/react.svg'

function Stack() {
  return (
    <div className='my-8'>
      <div className='p-8  flex items-center  justify-center '>
        <h2 className='font-bold text-3xl  lg:text-5xl text-center'>this is my stack</h2>
      </div>
      <div className='flex justify-center'>
        <section className='grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2'>
          <img src={python} className="h-32 p-4 transition duration-200 hover:-translate-y-4" loading='lazy'></img>
          <img src={flutter} className="h-32 p-4 transition duration-200 hover:-translate-y-4" loading='lazy'></img>
          <img src={dart} className="h-32 p-4 transition duration-200 hover:-translate-y-4" loading='lazy'></img>
          <img src={fastapi} className="h-32 p-4 transition duration-200 hover:-translate-y-4" loading='lazy'></img>
          <img src={reacticon} className="h-32 p-4 transition duration-200 hover:-translate-y-4" loading='lazy'></img>
          <img src={js} className="h-32 p-4 transition duration-200 hover:-translate-y-4" loading='lazy'></img>
        </section>
      </div>
    </div>
  )
}

export default Stack