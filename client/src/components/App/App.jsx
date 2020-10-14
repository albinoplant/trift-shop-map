import React from 'react';
import Cockpit from '../Cockpit/Cockpit'
import Location from '../Location/Location'
import { useSelector } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() { 
  const LOCATION = useSelector(state => state.location);

  return (
    <Router>
    <Switch>
          <Route exact path="/">
            <Location/>
          </Route>
          <Route path="/cockpit">
            { LOCATION ? <Cockpit/> : <Redirect to="/"/>}
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
