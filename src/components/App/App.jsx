import React from "react";
import Cockpit from "../Layout/Cockpit/Cockpit";
import Location from "components/Location";
import useGeo from "hooks/useGeo";

function App() {
  const { location: LOCATION } = useGeo();
  return (
    <React.Fragment>
      {!LOCATION && <Location />}
      {!!LOCATION && <Cockpit />}
    </React.Fragment>
  );
}

export default App;
