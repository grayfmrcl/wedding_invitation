import React from 'react'

import bota from '../assets/bota.jpg'
import nia from '../assets/nia.jpg'

function Wedding() {
  const brideAndGroom = [
    {
      name: "Grayfield Miracle", 
      nickname: "Ray",
      image: 'bota', 
      description: "The first Son of Mr Alexander Moningkey and Mrs Anneke Pratasik"
    },
    {
      name: "Cinia Eleonora",
      nickname: "Nia",
      image: "nia",
      description: "The only Daughter of Mr Pierre de la Motte and Mrs Rita Muntu"
    }
  ]


  return (
    <div id='wedding' style={{ padding:'3vh', backgroundColor: 'white ', opacity: '0.94', textAlign: 'start'}}>
      <p style={{ padding: '1vh', fontFamily: 'fantasy', color: '#968C83', fontSize: '2.2vh' }}> <b> The Wedding of: </b> </p>
      <div style={{alignItems: "center", alignContent: "center", paddingLeft: '10%'}}>
        <img className="rounded-circle img-fluid" alt={brideAndGroom[0].image} src={bota} style={{width: '160px', marginLeft: 0}}/> 
        <p style={{paddingTop: '2vh', fontFamily: 'fantasy', color: '#968C83', fontSize: '3vh', textAlign: 'end'}}> <b> {brideAndGroom[0].name} </b> </p>
        <p style={{fontFamily: 'Quicksand', color: '#968C83', fontSize: '1.8vh', textAlign: 'end'}}> {brideAndGroom[0].description} </p>
      </div>

      <h2 style={{fontFamily: 'fantasy', color: '#968C83', fontSize:'6vh', marginRight: '20%', textAlign: 'end', marginTop: '5vh'}}> <b>&</b></h2>

      <div style={{paddingLeft: "10%"}}>
        <img className="rounded-circle img-fluid" alt={brideAndGroom[1].image} src={nia} style={{width: '160px', marginLeft: 0, alignContent: 'end'}}/> 
        <p style={{paddingTop: '2vh', fontFamily: 'fantasy', color: '#968C83', fontSize: '3vh', textAlign: 'end '}}>  <b> {brideAndGroom[1].name} </b> </p>
        <p style={{fontFamily: 'Quicksand', color: '#968C83', fontSize: '1.8vh', textAlign: 'end'}}> {brideAndGroom[1].description} </p>
      </div>
      <br />
      <hr />
    </div>
  )
}

export default Wedding