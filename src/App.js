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
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
initializeApp(firebaseConfig);

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
