import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Jumbotron from '../components/Jumbotron'
import Wedding from '../components/Wedding'
import Reservation from '../components/Reservation'
import Gallery from '../components/Gallery'
import Congratulations from '../components/Congratulations'
import Invitation from '../components/Invitation'
import Quotes from '../components/Quotes'
import Thankyou from '../components/Thankyou'
import Cover from './Cover'
import { ref, update, onValue } from "firebase/database"

import { db } from '../utils/firebaseConfig';

function Home() {
  const { key } = useParams();

  const [guestList, setGuestList] = useState({});
  const [user, setUser] = useState();

  function postComment(comment) {
    const updates = {};
    updates[`/guests/${key}/comment`] = comment;
    updates[`/guests/${key}/commentedAt`] = new Date().valueOf();
    return update(ref(db), updates)
  }

  function confirmAttendee(attendeeCount) {
    const updates = {};
    updates[`/guests/${key}/attendeeConfirmed`] = attendeeCount;
    return update(ref(db), updates)
  }

  useEffect(() => {
    const guestRef = ref(db, '/guests');

    onValue(guestRef, (snapshot) => {
      const guestData = snapshot.val();
      if (snapshot.exists()) {
        const userData = guestData[key];
        setGuestList(guestData);
        if (userData) {
          setUser({
            key,
            ...userData,
          })
        }
      }
    });
  }, []);

  return (
    !user ? <Cover /> : <>
      <Navbar />
      <Jumbotron />
      <Wedding />
      <Invitation />
      <Gallery />
      {user.attendeeLimit > 0 ? <Reservation user={user} confirmAttendee={confirmAttendee} /> : <></>}
      <Quotes />
      <Congratulations guestList={guestList} user={user} postComment={postComment} />
      <Thankyou />
    </>
  )
}

export default Home
