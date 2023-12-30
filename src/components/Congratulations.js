// eslint-disable-next-line
import React, { useEffect, useState } from 'react'
import Comments from './Comments'
  
// eslint-disable-next-line
const serverUrl = process.env.REACT_APP_SERVER_URL;

function Congratulations() {
    // let [comments, setComments] = useState([])
    let [newComment, setNewComment] = useState({
      name: '',
      message: ''
    })

    // eslint-disable-next-line
    // setComments = []

    // function fetchComments () {
    //   fetch(serverUrl)
    //     .then(response => response.json())
    //     .then(data => setComments(data))
    // }

    // useEffect(() => {
    //   fetchComments()
    // }, [])

    function addComment(event){
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

    console.log(Comments)

    
    return (
      <div className= 'container' id='congratulations' style={{backgroundColor: "#FFF5EA", paddingBottom: "30px"}}>
        <h1 style={{fontFamily: 'Quicksand', color: '#968C83', marginBottom: '5vh'}}> <b> Congratulations </b></h1>
        <form className='container col-8' onSubmit={addComment}>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label" style={{color: '#968C83'}}>Name</label>
            <input type="text" className="form-control" id="name"
              onChange={(event) => setNewComment({...newComment, name: event.target.value})}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label" style={{color: '#968C83'}}>Messages</label>
            <textarea className="form-control" id="wish" rows="3"
              onChange={(event) => setNewComment({...newComment, message: event.target.value})}
            ></textarea>
          </div>
          <div className="mb-3">
            <button type="submit" className="btn mb-3" style={{backgroundColor: '#968C83', color:'#ffeedb'}}> Send</button>
          </div>
        </form>

        <div className='rounded-3 container col-9' style={{backgroundColor: '#968C83'}}>
          <div style={{fontFamily: 'Quicksand', color: '#FFF5EA', padding:'1vh'}}>
             <p><b>Happy Wedding. Happily ever after Nia and Bota !</b></p>
            <span> Caroline & Gauthier</span>
            <hr></hr>
          </div>


          <div style={{fontFamily: 'Quicksand', color: '#FFF5EA', padding:'1vh'}}>
            <p><b>Congrats on your wedding day! Doakan kami menyusul ASAP! :D </b></p>
            <span> Cindy & Aju</span>
            <hr></hr>
          </div>


          <div style={{fontFamily: 'Quicksand', color: '#FFF5EA', padding:'1vh'}}>
            <p><b>Happy wedding guys! Goyaaaaanngggg </b></p>
            <span> Icil </span>
            <hr></hr>
          </div>

          <div style={{fontFamily: 'Quicksand', color: '#FFF5EA', padding:'1vh'}}>
            <p><b> Happy wedding!</b></p>
            <span> Mik & Essy</span>
            <hr></hr>
          </div>

          <div style={{fontFamily: 'Quicksand', color: '#FFF5EA', padding:'1vh'}}>
            <p><b>Happy Wedding. Happily ever after Nia and Bota !</b></p>
            <span> lala & apeng</span>
            <hr></hr>
          </div>


          <div style={{fontFamily: 'Quicksand', color: '#FFF5EA', padding:'1vh'}}>
            <p><b>Congrats on your wedding day! Doakan kami menyusul ASAP! :D </b></p>
            <span> Clara & Dio</span>
            <hr></hr>
          </div>


          <div style={{fontFamily: 'Quicksand', color: '#FFF5EA', padding:'1vh'}}>
            <p><b>Happy wedding guys! Goyaaaaanngggg </b></p>
            <span> Inten & Lili </span>
            <hr></hr>
          </div>

          <div style={{fontFamily: 'Quicksand', color: '#FFF5EA', padding:'1vh'}}>
            <p><b> Happy wedding!</b></p>
            <span> Rivay</span>
            <hr></hr>
          </div>
        </div>
      </div> 
    )
  }

  export default Congratulations