import React from 'react'
import linkedinIcon from '../assets/linkedin.png'
import twitterIcon from '../assets/twiter.png'
import githubIcon from '../assets/github.png'

function Footer() {
  return (
    <footer className='w-full border-t-2 border-black/10 p-10'>
        <div className='flex justify-center lg:justify-between items-center h-full'>
            <small className='hidden lg:block lg:tracking-wider lg:text-lg '>if you read this, hello ┏(-_-)┛┗(-_- )┓</small>
            <div className='flex'>
                <a href="https://www.linkedin.com/in/erasmo-alvarado-49800a241/?locale=en_US"><img src={linkedinIcon} className='h-7 px-3'></img></a>
                <a href='https://twitter.com/Erasm0Alvarad0'><img src={twitterIcon} className='h-7 px-3'></img></a>
                <a href="https://github.com/ErasmoAlvarado" ><img src={githubIcon} className='h-7 px-3'></img></a>
            </div>
        </div>
    </footer>
  )
}

export default Footer