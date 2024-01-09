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

      <div className="mb-3" style={{ color: '#968C83' }}>
        <p className="p-2">
          If you want to send us gifts, you can refer to this registry or bank account below
        </p>
        <div className="mb-3">
          <a
            role="button"
            className="btn"
            style={{ backgroundColor: '#968C83', color: '#ffeedb' }}
            href="https://www.myregistry.com/wedding-registry/cinia-eleonora-and-grayfield-miracle-tangerang-banten/4092156">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gift-fill" viewBox="0 0 16 16">
              <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A3 3 0 0 1 3 2.506zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43zM9 3h2.932l.023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0zm6 4v7.5a1.5 1.5 0 0 1-1.5 1.5H9V7zM2.5 16A1.5 1.5 0 0 1 1 14.5V7h6v9z" />
            </svg>
            <span> Gifts Registry</span>
          </a>
          <p
            className="p-2"
            style={{ fontFamily: 'Quicksand', color: '#6C3428', fontSize: '12px' }}>
            <i>This registry list are to avoid gifts duplication</i>
          </p>
        </div>
        <div className="mb-3">
          <button type="button" className="btn"
            style={{ backgroundColor: '#968C83', color: '#ffeedb' }}
            disabled={true}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wallet2" viewBox="0 0 16 16">
              <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5z" />
            </svg>
            <span> 5350133412</span>
          </button>
          <p className="p-2" style={{ fontFamily: 'Quicksand', color: '#6C3428', fontSize: '12px' }}>
            Bank BCA &#8226; Cinia Eleonora Dela Motte
          </p>
        </div>
      </div>

      <hr></hr>

      <form className='container col-8' onSubmit={handlePostComment}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label" style={{ color: '#968C83' }}>
            Send us your wish
          </label>
          <textarea id="text_wish" name="wish" className="form-control" rows="3" value={comment} onChange={handleChangeComment}></textarea>
        </div>
        <div className="mb-3">
          <button className="btn mb-3" style={{ backgroundColor: '#968C83', color: '#ffeedb' }} disabled={comment.length < 3}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
              <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
            </svg>
            <span> Send</span>
          </button>
        </div>
      </form>

      <div className='rounded-3 container col-9' style={{ backgroundColor: '#968C83' }}>
        {displayedComments.map((guest) => <Comment key={guest.key} title={guest.title} comment={guest.comment} />)}
      </div>
    </div >
  )
}

export default Congratulations