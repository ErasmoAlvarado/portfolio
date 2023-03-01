

function CardProjects(props) {
  return (
    <div className='flex justify-center  items-center transition duration-300  pt-10 hover:bg-black/10 rounded-xl'>
      <div>
          <div className='flex justify-center lg:mx-7 md:mx-24'>
            <div className="w-5/6 h-56 bg-blue-600"></div>
          </div>
          <h3 className='text-2xl font-bold text-center pt-6'>{props.title}</h3>
          <p className=' mx-4 text-justify pt-4 max-w-3xl mb-4 text-xl font-medium text-black/40'>{props.description}</p>
          <ol className='font-bold '> 
              <a href={props.github}><li className='p-1 text-xl flex justify-center text-center'><a>go to github</a></li></a>
              {
                props.isweb == true
                ?<li href={props.web} className='p-1 text-xl flex justify-center text-center'><a>go to web</a></li>
                :<div></div>
              }
          </ol>
      </div>
    </div>
  )
}

export default CardProjects