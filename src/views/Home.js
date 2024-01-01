import React from 'react'
import Navbar from '../components/Navbar'
// import Snowflakes from '../components/Snowflakes'
import Jumbotron from '../components/Jumbotron'
import Wedding from '../components/Wedding'
import Reservation from '../components/Reservation'
import Gallery from '../components/Gallery'
import Congratulations from '../components/Congratulations'
import Invitation from '../components/Invitation'
import Maps from '../components/Maps'
import Quotes from '../components/Quotes'
import Thankyou from '../components/Thankyou'



function Home({ guests }) {
  return (
    <>
      <Navbar />
      {/* <Snowflakes /> */}
      <Jumbotron />
      <Wedding />
      <Invitation />
      <Gallery />
      <Reservation />
      <Quotes />
      <Congratulations guests={guests ?? []} />
      <Maps />
      <Thankyou />

    </>
  )
}

export default Home
