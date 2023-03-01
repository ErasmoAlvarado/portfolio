import React from 'react'
import CardSkill from "./CardSkill";
import createSkill from '../assets/createskill.svg' 
import toolSkill from '../assets/tool.svg' 
import personalSkill from '../assets/personal.svg' 


export default function () {
  return (
    <div className='bg-gray-300/30 w-full pb-10'>
      <div className=' p-4 flex items-center  justify-center mt-14'>
        <h2 className=' pt-10 font-bold text-3xl  lg:text-5xl text-center'>things that can bring to you</h2>
      </div>
      <section className='grid lg:grid-cols-3 md:mx-32 lg:mx-20 mx-10 content-center'>
       <CardSkill list1="mobile develoment" list2="web develoment" image={createSkill} title="what can i make for you" description="I am a software developer who can make various kinds of products"></CardSkill>
       <CardSkill list3="python" list1="dart/flutter" list2="js/react" image={toolSkill} title="languages that i use" description="every developer need tools to make awesome things"></CardSkill>
       <CardSkill list1="i love learn new things" list2="focus on personal grow" list3="Always willing to listen" title="more about me" description="details about me, who am i, how i work and so on" image={personalSkill}></CardSkill>
      </section>
    </div>
  )
}
