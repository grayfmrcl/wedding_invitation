import React from 'react'

function Navbar () {
  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid" style={{
        backgroundColor: '#FFF5EA'}}>
        <a className="navbar-brand" href="#jumbotron" 
         style={{
          color: '#968C83', 
          fontSize: '3vh',
          fontFamily : 'Sacramento'
         }}> <b> GC </b></a>
        <button className="navbar-toggler" style={{color: '#968C83'}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse ms-lg-5" id="navbarNav" style={{fontFamily : 'Quicksand'}}>
          <ul className="navbar-nav ms-lg-5">
            <li className="nav-item ms-lg-5">
              <a className="nav-link active" aria-current="page" href="#jumbotron" style={{color: '#968C83', fontSize: '1.5vh'}}>Home</a>
            </li>
            <li className="nav-item ms-lg-5">
              <a className="nav-link" href="#wedding" style={{color: '#968C83', fontSize: '1.5vh'}}>Profile</a>
            </li>
            <li className="nav-item ms-lg-5">
              <a className="nav-link" href="#invitation" style={{color: '#968C83', fontSize: '1.5vh'}}>Invitation</a>
            </li>
            <li className="nav-item ms-lg-5">
              <a className="nav-link" href="#gallery" style={{color: '#968C83', fontSize: '1.5vh'}}>Gallery</a>
            </li>
            <li className="nav-item ms-lg-5">
              <a className="nav-link" href="#congratulations" style={{color: '#968C83', fontSize: '1.5vh'}}>Wishes</a>
            </li>
            <li className="nav-item ms-lg-5">
              <a className="nav-link" href="#maps" style={{color: '#968C83', fontSize: '1.5vh'}}>Maps</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar