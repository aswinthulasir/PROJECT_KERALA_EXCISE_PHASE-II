import React from 'react'
import SubNavbar from './components/SubNavbar'
import NavbarComp from './components/Navbar'
import CarouselDisplay from './components/CarousalDisplay'
import Leaders from './pages/About'
import ScrollingTextBar from './components/ScrollingTextBar'
import NewsAndAnnouncements from './pages/NewsAndAnnouncements'



const Section1 = () => {
  return (
    <>
        <SubNavbar />
        <div className='navbar-layout'>
        <NavbarComp />
        </div>
        <CarouselDisplay />
        <ScrollingTextBar />
        <div className='leader-sec'>
        <Leaders />
        </div>
        <div className='News-Announce-sec'>
          <NewsAndAnnouncements />
        </div>
        
    </>
  )
}

export default Section1