import React from 'react'

function Comment({ title, comment }) {
  return <div style={{ fontFamily: 'Quicksand', color: '#FFF5EA', padding: '2vh' }}>
    <p>
      <b>{`"${comment}"`}</b>
    </p>
    <span>
      <i>-{title}-</i>
    </span>
    <hr style={{ margin: '0.25rem' }}></hr>
  </div>
}

export default Comment;