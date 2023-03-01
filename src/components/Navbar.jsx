import React from 'react'
import { useState } from 'react'
import PopUp from './PopUp'


export default function Navbar(props) {
  const [popUp, setpopUp] = useState(false)
  function stateToTrue() {
    setpopUp(true)
  }
  function stateToFalse() {
    setpopUp(false)
  }
  return (
    <div className='sticky top-0 bg-white z-10 shadow-md shadow-black/10 '>
      <div className='flex flex-wrap items-center justify-around py-3'>
        <a className='text-white-black text-3xl font-extrabold text-center'>Erasmo Alvarado</a>
        <section className=''>
          <a onClick={stateToTrue} className='w-56 py-1 flex justify-center font-bold hover:text-purple-600 transition hover:scale-110 duration-500 '>contact me</a>
        </section>
      </div>
      {
        popUp == true
        ?<PopUp toFalse={stateToFalse}></PopUp>
        :<div></div>
      }
    </div>
  )
}
