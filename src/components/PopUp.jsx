import React from 'react'
import { useRef } from 'react'
import Button from './Button'
import emailjs from '@emailjs/browser';

function PopUp(props) {
  const formRef = useRef("")
  function sentForm(e) {
    e.preventDefault()
    emailjs.sendForm('service_awg2fhk', 'template_qjbcc0x', formRef.current,"GNwL3JPacT5dhdL8E")
    .then((respose)=>{
      alert('thank you for you message💜')
      props.toFalse()
    })
    .catch((error)=>{
      console.log('something goes wrong')
      console.error(error);
    })
  }
  return (
    <div className='absolute top-0 w-full h-screen bg-black/40 flex justify-center items-center'>
         <div className='bg-white p-5 w-11/12 lg:w-5/12 md:w-4/6 rounded-xl'>
         <p onClick={props.toFalse} className='absolute transition hover:text-red-500 hover:scale-110 p-2 duration-200'>X</p>
            <div className='flex items-center  justify-center '>
                <h2 className=' pt-10 font-bold text-sm  md:text-xl lg:text-2xl text-center'>erasmoalvaradosierra@gmail.com</h2>
            </div>
            <p className=' mx-4 text-justify pt-4 max-w-3xl mb-4 text-xl font-medium text-black/40'>fill this form if you want to contact with me :)</p>
            <form ref={formRef}>
                <input name='user_name' type='text' placeholder='your name' className='border-2 my-2 outline-none focus:border-purple-900 focus:-translate-y-1 transition duration-500 rounded-xl p-2 w-full border-purple-600'></input>
                <input name='user_email' type='email' placeholder='your email' className='border-2 my-2 outline-none focus:border-purple-900 focus:-translate-y-1 transition duration-500 rounded-xl p-2 w-full border-purple-600'></input>
                <textarea name='message' type='text' placeholder='your message' className='h-24 border-2  my-2 outline-none focus:border-purple-900 focus:-translate-y-1 transition duration-500  rounded-xl p-2 w-full border-purple-600'></textarea>
            </form>
            <Button onpress={sentForm} title="go"></Button>
         </div>
    </div>
  )
}

export default PopUp