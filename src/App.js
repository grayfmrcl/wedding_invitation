import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './views/Home'
import LandingPage from './views/LandingPage';



function App() {
  return (
    < div className="App" >
      <Router>
      <div>     
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
]        <Route path="/:name">
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
