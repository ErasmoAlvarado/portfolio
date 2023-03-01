import React from 'react'
import CardProjects from './CardProjects'


function Projects() {
  return (
    <div className='bg-gray-300/30 w-full pb-10'>
      <div className=' p-4 flex items-center  justify-center mt-14'>
        <h2 className=' pt-10 font-bold text-3xl  lg:text-5xl text-center'>Some projects that i've made</h2>
      </div>
      <section className='grid lg:grid-cols-3 md:mx-32 lg:mx-20 mx-10 content-center'>
        <CardProjects title='hola que haces' description="this is a cool web make for a ham lover web iam a ham lover"></CardProjects>
        <CardProjects title='hola que haces' description="this is a cool web make for a ham lover web iam a ham lover" ></CardProjects>
        <CardProjects title='hola que haces' description="this is a cool web make for a ham lover web iam a ham lover"></CardProjects>
      </section>
    </div>
  )
}

export default Projects