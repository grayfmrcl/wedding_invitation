import React, { useState } from 'react'



function Reservation({ user, confirmAttendee }) {
  const [attendeeConfirmed, setAttendeeConfirmed] = useState(user.attendeeConfirmed ?? 0);

  function handleChangeAttendee(e) {
    let value = e.target.value;
    if (value > user.attendeeLimit) {
      value = user.attendeeLimit;
    }
    setAttendeeConfirmed(value);
  }

  function handleConfirmAttendee(e) {
    confirmAttendee(Number(attendeeConfirmed));
    e.preventDefault();
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
        <form onSubmit={handleConfirmAttendee}>
          <div className="mb-3">
            <p style={{ fontFamily: 'Quicksand', color: '#6C3428', }}>
              How many family members will attend?
            </p>
            <div className="d-flex justify-content-center">
              <input type='number' className="form-control p-2" id='attendeeConfirmed'
                style={{ width: 'fit-content' }}
                min={0}
                max={user.attendeeLimit}
                value={attendeeConfirmed}
                onChange={handleChangeAttendee}
              />
              <span className="p-2" style={{ fontFamily: 'Quicksand', color: '#6C3428', }}>
                of <b>{user.attendeeLimit}</b> will attend.
              </span>
            </div>
          </div>
          <p style={{ fontFamily: 'Quicksand', color: '#6C3428', fontSize: '12px' }}>
            <i>This invitation is valid for {user.attendeeLimit} persons</i>
          </p>
          <div className="mb-3">
            <button className="btn mb-3" disabled={attendeeConfirmed < 1} style={{ fontFamily: 'Quicksand', backgroundColor: '#6C3428', color: '#ffeedb' }} > SEND </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Reservation





