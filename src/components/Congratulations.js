// eslint-disable-next-line
import React, { useState } from 'react'
import Comment from './Comment'

function Congratulations({ guestList, user, postComment }) {
  const guestComments = Object.keys(guestList)
    .map((key) => ({
      key: key,
      title: guestList[key].title,
      comment: guestList[key].comment,
      commentedAt: guestList[key].commentedAt
    }))
    .filter((guest) => !!guest.comment)
    .sort((a, b) => b.commentedAt - a.commentedAt);

  const userComment = guestComments.find((guest) => guest.key === user.key);

  const displayedComments = [
    userComment,
    ...guestComments.filter((guest) => guest.key !== user.key).slice(0, 10)
  ].filter((comments) => !!comments);

  const [comment, setComment] = useState('');

  function handleChangeComment(e) {
    setComment(e.target.value);
  }

  function handlePostComment(e) {
    postComment(comment);
    setComment('');
    e.preventDefault();
  }

  return (
    <div className='container' id='congratulations' style={{ backgroundColor: "#FFF5EA", paddingBottom: "30px" }}>
      <h1 className="p-3" style={{ fontFamily: 'Quicksand', color: '#968C83' }}> <b> Congratulations </b></h1>

      <form className='container col-8' onSubmit={handlePostComment}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label" style={{ color: '#968C83' }}>
            Send us your wish
          </label>
          <textarea id="text_wish" name="wish" className="form-control" rows="3" value={comment} onChange={handleChangeComment}></textarea>
        </div>
        <div className="mb-3">
          <button className="btn mb-3" style={{ backgroundColor: '#968C83', color: '#ffeedb' }} disabled={comment.length < 3}> Send</button>
        </div>
      </form>

      <div className='rounded-3 container col-9' style={{ backgroundColor: '#968C83' }}>
        {displayedComments.map((guest) => <Comment key={guest.key} title={guest.title} comment={guest.comment} />)}
      </div>
    </div >
  )
}

export default Congratulations