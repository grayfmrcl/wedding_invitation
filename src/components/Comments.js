import React from 'react'

function Comments({comment}) {

  comment = [{
    name: "Caroline & Gauthier",
    message: "Happy Wedding"
  }]

  return (
    <div>
      <h5><b>{comment.name}</b></h5>
      <p>{comment.message}</p>
      <hr></hr>
    </div>

  )
}

export default Comments