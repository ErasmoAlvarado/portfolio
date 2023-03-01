import React from 'react'


function CardSkill(props) {
  return (
    <div className='flex justify-center  items-center transition duration-300  pt-10 hover:bg-black/10 rounded-xl'>
      <div>
          <div className='flex justify-center'><img src={props.image} loading='lazy' className=''></img></div>
          <h3 className='text-2xl font-bold text-center pt-6'>{props.title}</h3>
          <p className=' mx-4 text-justify pt-4 max-w-3xl mb-4 text-xl font-medium text-black/40'>{props.description}</p>
          <ol className='font-bold '> 
              <li className='p-1 text-xl flex justify-center text-center'><p>{props.list1}</p></li>
              <li className='p-1 text-xl flex justify-center text-center'><p>{props.list2}</p></li>
              <li className='p-1 text-xl flex justify-center text-center'><p>{props.list3}</p></li>
          </ol>
      </div>
    </div>
  )
}

export default CardSkill