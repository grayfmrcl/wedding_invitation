import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './views/Home'
import LandingPage from './views/LandingPage';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, onValue } from "firebase/database"
import { useEffect, useState } from 'react';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUhtb516LEjfGYSYsv_AYp71grUH_sbLk",
  authDomain: "wedding-invitation-e055a.firebaseapp.com",
  databaseURL: "https://wedding-invitation-e055a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "wedding-invitation-e055a",
  storageBucket: "wedding-invitation-e055a.appspot.com",
  messagingSenderId: "342807744917",
  appId: "1:342807744917:web:c59717a4df9b4f495e669c",
  measurementId: "G-8CP8BGJEDY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getDatabase();

function App() {
  const [guests, setGuests] = useState([]);

  useEffect(() => {
    const query = ref(db, '/guests');

    onValue(query, (snapshot) => {
      const data = snapshot.val();

      if (snapshot.exists()) {
        const guests = Object.keys(data)
          .map(key => ({
            key,
            title: data[key].title,
            comment: data[key].comment
          }));
        setGuests((states) => [...guests, states]);
      }
    });
  }, []);

  return (
    < div className="App" >
      <Router>
        <div>
          <Switch>
            <Route path="/home">
              <Home guests={guests} />
            </Route>
            <Route path="/:name">
              <LandingPage />
            </Route>
            <Route path="/">
              <LandingPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}



export default App;
