import React from 'react'

function Quotes() {
  return (
    <div>
      <img className="img-fluid rounded-3" alt='photo1' src={"https://red-thin-mammal-568.mypinata.cloud/ipfs/QmZdFrQkpk4hDeKFaVCGeeAegwgruzGPXy8291EngWpReS?_gl=1*y8ot5*_ga*ODAyODE4MDgxLjE2OTc2ODgzNjA.*_ga_5RMPXG14TE*MTY5NzgwNzY2NS42LjEuMTY5NzgwODEzOC42MC4wLjA."} style={{width: '100%', visibility: 'visible', }}/>
      <div id="Jumbotron" className="container" 
        style={{ backgroundColor: '#999B84' }}>
          <p style={{padding: '10px', marginBottom: '0px', color: '#F4EEED' }}> 
          “A happy marriage is a long conversation which always seems too short.” - <b>A. Maurois</b>
          </p>
      </div>
    </div>
  )
}

export default Quotes