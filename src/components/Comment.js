import React from 'react'

function Comment({ title, comment }) {
  return <div style={{ fontFamily: 'Quicksand', color: '#FFF5EA', padding: '1vh' }}>
    <p><b>{comment}</b></p>
    <span> {title}</span>
    <hr></hr>
  </div>
}

export default Comment;