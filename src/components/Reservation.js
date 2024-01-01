import React from 'react'



function Reservation() {

  function addRSVP(event) {
    console.log(event)
    //   event.preventDefault()
    //   fetch(serverUrl, {  
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify(newComment),
    //   })
    //     .then(res => res.json())
    //     .then(post => {
    //       console.log(post)
    //       fetchComments()
    //     })
    //     .catch(err => console.log(err))
  }

  return (
    <div className='container' id="reservation" style={{ padding: '4vh', backgroundColor: '#FFF5EA' }}>
      <h1 style={{ fontFamily: 'Quicksand', color: '#6C3428', padding: '3vh' }}> <b> RSVP </b></h1>
      <div style={{ padding: "5vh", border: "1px solid", borderRadius: "5px", borderColor: "#A4907C" }}>
        <img className="img-fluid rounded-3"
          alt='photo3'
          src={"https://red-thin-mammal-568.mypinata.cloud/ipfs/QmS3RqxDRKqDAP4R6rr4VmuXgAX4dSsnaQrPHX2Bhbj29W?_gl=1*eh4dy3*_ga*NjIxMTA3OTI2LjE2OTgyOTk3MjA.*_ga_5RMPXG14TE*MTY5ODkwNzA3Mi44LjAuMTY5ODkwNzA3Mi42MC4wLjA."}
          style={{ width: '100%', marginBottom: '2vh' }} />

        <div style={{ fontFamily: 'Quicksand', color: '#6C3428' }}>
          <p>Help us prepare a warm meal for all of you by sending a confirmation of attendance via the following form: </p>
        </div>
        <form onSubmit={addRSVP}>
          <div className="mb-3">
            <label style={{ fontFamily: 'Quicksand', color: '#6C3428' }}> Name </label>
            <input type='text' className="form-control" id='name'>
            </input>
          </div>

          <div className="mb-3">
            <label style={{ fontFamily: 'Quicksand', color: '#6C3428' }}> Phone </label>
            <input type='text' className="form-control" id='phone'>
            </input>
          </div>

          <div className="mb-3">
            <label style={{ fontFamily: 'Quicksand', color: '#6C3428' }}> Will you attend </label>
            <div>
              <input type='radio' className="form-check-input" id='rsvp' value="yes" ></input>
              <span style={{ fontFamily: 'Quicksand', color: '#6C3428', marginLeft: '2vh' }} > Yes</span>
            </div>
            <div>
              <input type='radio' className="form-check-input" id='rsvp' value="no" ></input>
              <span style={{ fontFamily: 'Quicksand', color: '#6C3428', marginLeft: '2vh' }} > No</span>
            </div>
          </div>
          <div className="mb-3">
            <button type="submit" className="btn mb-3" style={{ fontFamily: 'Quicksand', backgroundColor: '#6C3428', color: '#ffeedb' }} > SEND </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Reservation





