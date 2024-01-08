import React from 'react'

function Jumbotron() {
  return (
    <div id="Jumbotron" className="container"
      style={{
        backgroundImage: `url(https://red-thin-mammal-568.mypinata.cloud/ipfs/QmdSUXCeXjn4DXY5X2drTnNhhjqe45qaoPmWpVzxygdDZU)`,
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: 'contain'
      }}>
      {/* <h1 className='rounded' style={{fontFamily:'Sacramento', height: '10vh', fontSize: '6vh', marginTop: '4vh', padding: '2vh', color: '#556052'}}><b>The wedding of Dio and Clara</b></h1> */}
      <div className='container' style={{ padding: '62px' }}>
        <p className="rounded"
          style={{
            paddingTop: '40vh',
            fontFamily: 'Georgia, Garamond, Serif',
            fontSize: '2vh',
            color: '#FFF5EA',
          }}>
          "I hold you in my heart, for we have shared together God’s blessings."
        </p>
        <span className="rounded"
          style={{
            fontFamily: 'Georgia, Garamond, Serif',
            fontSize: '2.5vh',
            color: '#FFF5EA',
          }}>Philippians 1:7</span>
      </div>
    </div>
  )
}

export default Jumbotron