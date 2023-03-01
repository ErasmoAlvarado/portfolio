import React from 'react'
import { useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Presentation from '../components/Presentation'
import Projects from '../components/Projects'
import Skill from '../components/Skill'
import Stack from '../components/Stack'

export default function Home() {
  const [PopUp, setPopUp] = useState(false)
  return (
    <div className='font-mono'>
      <Navbar></Navbar>
      <Presentation></Presentation>
      <Skill></Skill>
      <Stack></Stack>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  )
}
