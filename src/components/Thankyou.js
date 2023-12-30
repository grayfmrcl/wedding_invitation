import React from 'react'
// import RJ770638 from '../assets/RJ770638a.jpg'

function Thankyou() {
  return (
    <div id="thankyou" className="container" 
      style={{
      backgroundImage: `url(https://red-thin-mammal-568.mypinata.cloud/ipfs/QmTDvDfri3RgCPBr559qpuETDLKqYuRQb1SsQFs6Z9pmNT?_gl=1*16go5cf*_ga*NjIxMTA3OTI2LjE2OTgyOTk3MjA.*_ga_5RMPXG14TE*MTY5ODkxNjc4OC45LjEuMTY5ODkxNzk5NS40OS4wLjA.)`, 
      backgroundSize: '100%', 
      backgroundRepeat: 'no-repeat', 
      backgroundPosition:'center',
      height: 'contain',
      opacity: "0.86"
      }}>
      <div className='container' style={{paddingTop: '240px', paddingBottom: '240px'}}>
        <span className="rounded" 
        style={{
          fontFamily: 'Sacramento', 
          fontSize: '6vh', 
          color: '#FFF5EA',
          }}>Thank You! </span>
      </div>
    </div>
  )
}

export default Thankyou