
import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Project from './Components/Projects/project'
import Contactus from './Components/ContactUS/Contactus'
import Footer from './Components/Footer/Footer'
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About/>
      <Project/>
      <Contactus/>
      <Footer/>
      
    </div>
  )
}

export default App
