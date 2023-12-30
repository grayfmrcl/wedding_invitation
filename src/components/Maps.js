import React from 'react'

function Maps() {
  return (
    
    <div className= 'container' id='maps' style={{padding:'3vh', backgroundColor: "#968C83"}}>
      <div style={{ border: "2px solid", borderColor: "#FFF5EA", borderRadius: "10px", padding: "2vh"}}>
        <h1 style={{fontFamily: 'Quicksand', color: '#FFF5EA', marginBottom: '2vh'}}> Maps </h1>
          <div
          style={{
            marginTop: '5%',
            overflow: 'hidden',
            paddingBottom:'56.25%',
            position:'relative',
            height:0,
            marginBottom: '5%',
            border: '3px solid #968C83',
          }}
          >
        <iframe title="googlemaps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7152866885876!2d124.84189027504853!3d1.3473035615838633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32876d17ec48f527%3A0xc3d0ad764b17c414!2sJHOANIE%20BBQ%20%26%20HOTPOT!5e0!3m2!1sen!2sid!4v1698893206211!5m2!1sen!2sid" width="400" height="300" 
        style={{
          border: 0, 
          allowfullscreen:"", 
          loading:"lazy", 
          left:0,
          top:0,
          height:'100%',
          width:'100%',
          position:'absolute'
      }}></iframe>
      </div>

      </div>
    </div>
  )
}

export default Maps