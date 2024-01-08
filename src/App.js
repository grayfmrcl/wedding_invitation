import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import './App.css';
import Cover from './views/Cover';
import Home from './views/Home';

function App() {
  return (
    < div className="App" >
      <Router>
        <div>
          <Switch>
            <Route path='/:key/home'>
              <Home />
            </Route>
            <Route path="/:key">
              <Cover />
            </Route>
            <Route path="/">
              <Cover />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App;
