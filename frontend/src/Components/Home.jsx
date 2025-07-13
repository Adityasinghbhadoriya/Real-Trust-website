import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Services from './Services'
import Aboutus from './Aboutus'
import MainContent from './MainContent'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <div>
            <Hero/>
            <Services/>
            <Aboutus/>
            <MainContent/>
            <Footer/>
        </div>
    </div>
  )
}

export default Home