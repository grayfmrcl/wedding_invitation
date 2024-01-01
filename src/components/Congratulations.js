// eslint-disable-next-line
import React, { useEffect, useState } from 'react'
import Comment from './Comment'

// eslint-disable-next-line
const serverUrl = process.env.REACT_APP_SERVER_URL;

function Congratulations({ guests }) {
  const guestComments = guests.filter((guest) => !!guest.comment);

  // let [comments, setComments] = useState([])
  let [newComment, setNewComment] = useState({
    name: '',
    message: ''
  })

  function addComment(event) {
  }

  return (
    <div className='container' id='congratulations' style={{ backgroundColor: "#FFF5EA", paddingBottom: "30px" }}>
      <h1 style={{ fontFamily: 'Quicksand', color: '#968C83', marginBottom: '5vh' }}> <b> Congratulations </b></h1>
      <form className='container col-8' onSubmit={addComment}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label" style={{ color: '#968C83' }}>Name</label>
          <input type="text" className="form-control" id="name"
            onChange={(event) => setNewComment({ ...newComment, name: event.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label" style={{ color: '#968C83' }}>Messages</label>
          <textarea className="form-control" id="wish" rows="3"
            onChange={(event) => setNewComment({ ...newComment, message: event.target.value })}
          ></textarea>
        </div>

        <div className="mb-3">
          <button type="submit" className="btn mb-3" style={{ backgroundColor: '#968C83', color: '#ffeedb' }}> Send</button>
        </div>
      </form>

      <div className='rounded-3 container col-9' style={{ backgroundColor: '#968C83' }}>
        {guestComments.map((guest) => <Comment key={guest.key} title={guest.title} comment={guest.comment} />)}
      </div>
    </div>
  )
}

export default Congratulations