import React from 'react'
import { Link, useParams, useRouteMatch } from 'react-router-dom'
import { ref, onValue } from "firebase/database"
import { useEffect, useState } from 'react';
import { db } from '../utils/firebaseConfig';

function Cover() {
  let { url } = useRouteMatch();

  const { key } = useParams();

  const [user, setUser] = useState({});

  useEffect(() => {
    const userRef = ref(db, `/guests/${key}`);

    onValue(userRef, (snapshot) => {
      const userData = snapshot.val();
      if (snapshot.exists()) {
        setUser({
          key,
          ...userData
        });
      }
    });
  }, [key]);

  return (
    <div style={{
      borderRadius: '5px',
      backgroundColor: 'rgba(0, 0, 0, .2)',
      color: 'white',
      margin: '15%',
      backgroundSize: 'contain',
      paddingTop: '3vh'
    }}>
      <div style={{
        padding: '3vh',
        marginBottom: '5vh'
      }}>
        <span style={{
          fontSize: "1.3vh",
          fontFamily: 'fantasy',
          padding: '2vh',
          marginTop: '6vh'
        }}> The Wedding of: </span>
        <h2 style={{
          fontSize: "2vh",
          fontFamily: 'fantasy',
          marginTop: '4vh'
        }}> <b> Grayfield & Cinia </b> </h2>
        <p style={{
          padding: '3vh',
          fontFamily: 'fantasy'
        }}>17 January 2024</p>
      </div>
      {user.title ? <div>
        <div>
          <p style={{ padding: '3vh', fontFamily: 'Quicksand', fontSize: '1.7vh' }}>
            Dear <b>{user.title}</b>
            <br />
            <span style={{ fontSize: '10px' }}>(We apologize for any misspelled name or title)</span>
          </p>
        </div>
        <Link className='btn' style={{
          backgroundColor: '#798777',
          color: '#E8EAE6',
          marginBottom: '20vh',
          animationDuration: '8s',
          animationName: 'bounce',
          animationIterationCount: 'infinite'
        }}
          to={`${url}/home`}
        > OPEN INVITATION </Link>
      </div> : <div></div>}
    </div>
  )
}

export default Cover