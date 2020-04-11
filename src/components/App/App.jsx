import React from 'react';
import Cockpit from '../Cockpit/Cockpit'
import Location from '../Location/Location'
import { useSelector, useDispatch } from 'react-redux'

function App() { 
  const LOCATION = useSelector(state => state.location);

  return (
    <React.Fragment>
      {!LOCATION && <Location/>}
      {LOCATION &&  <Cockpit/>}
    </React.Fragment>
  );
}

export default App;
