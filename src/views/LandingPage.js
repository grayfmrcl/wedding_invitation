import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'

function LandingPage () {
  const history = useHistory()
  const location = useLocation()

  function goToHome (event) {
    history.push('/home/')
  }

  function getName (val) {
    if(!val) return
    const [_, name] = val.split('=');
    let result = ""
    console.log(_);
    name.split("%20").forEach((n, v) => {
      result = v !== name.split("%20").length - 1 ? result + n + " " : result + n + ","
    });
    return result;
  }

  return (
    <div style={{
        borderRadius: '5px',
        backgroundColor: 'rgba(0, 0, 0, .2)',
        color: 'white',
        margin: '15%',
        backgroundSize: 'contain', 
        paddingTop: '3vh'}}>
      <div style={{
        padding: '3vh', 
        marginBottom: '5vh'
        }}>
        <span style={{
          fontSize: "1.3vh",
          fontFamily: 'fantasy', 
          padding: '2vh', 
          marginTop: '6vh'}}> The Wedding of: </span>
        <h2 style={{
          fontSize: "2vh",
          fontFamily: 'fantasy', 
          marginTop: '4vh'
          }}> <b> Grayfield & Cinia </b> </h2>
        <p style={{
          padding: '3vh', 
          fontFamily: 'fantasy'
          }}>17 January 2024</p>
      </div>
      <div>
        <p style={{padding: '3vh', fontFamily: 'Quicksand', fontSize:'1.7vh'}}>
          Dear <b>{getName(location.search)}</b>
          <br />
          <span style={{fontSize: '10px'}}>(We apologize for any misspelled name or title)</span>
        </p>
      </div>
      <button className='btn' style={{
        backgroundColor: '#798777', 
        color:'#E8EAE6', 
        marginBottom: '20vh', 
        animationDuration: '8s', 
        animationName: 'bounce', 
        animationIterationCount: 'infinite'
      }}
        onClick={(event) => goToHome()}
      > OPEN INVITATION </button>
    </div>
  )
}

export default LandingPage