import React from 'react'
import Navbar from '../components/Navbar'
// import Snowflakes from '../components/Snowflakes'
import Jumbotron from '../components/Jumbotron'
import Wedding from '../components/Wedding'
import Reservation from '../components/Reservation'
import Gallery from '../components/Gallery'
import Congratulations from '../components/Congratulations'
import Invitaion from '../components/Invitaion'
import Maps from '../components/Maps'
import Quotes from '../components/Quotes'
import Thankyou from '../components/Thankyou'



function Home () {
  return (
    <>
      <Navbar />
      {/* <Snowflakes /> */}
      <Jumbotron />
      <Wedding />
      <Invitaion />
      <Gallery />
      <Reservation />
      <Quotes />      
      <Congratulations />
      <Maps />
      <Thankyou />

    </>
  )
}

export default Home
