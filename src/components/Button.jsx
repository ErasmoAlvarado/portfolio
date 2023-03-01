import React from 'react'

export default function Button(props) {
  return (
    <div className='p-2'>
        <div onClick={props.onpress} className='bg-purple-600 rounded-xl p-2 text-xl flex justify-center text-white hover:bg-purple-700 transition duration-500 '>
            <p>{props.title}</p>
        </div>
    </div>
  )
}
