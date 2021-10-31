import React from "react";
import {GeoProvider} from 'contexts/GeoContext';
import Router from 'router';

function App() {
  return (  
  <GeoProvider>
    <Router/>
  </GeoProvider>
  );
}

export default App;
