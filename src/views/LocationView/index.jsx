import React from "react";
// import ButtonMain from "components/Button/ButtonMain";
import { Button } from "@mui/material";
import cities from "data/cities";
import useGeo from "hooks/useGeo";
import { useHistory } from "react-router-dom";
import { paths } from "routes";

const Location = () => {
  const { setLocation } = useGeo();
  const history = useHistory();

  const handleLocation = (city) => {
    setLocation(city);
    history.push(paths.location + "/" + city.name);
  };

  return (
    <React.Fragment>
      <div
        style={{
          padding: "1rem",
          backgroundColor: "rgba(0,0,0,0.05)",
          zIndex: "0",
        }}
      >
        <h1>Trifto is your trift guide</h1>
        <p>
          It brings you all necessery info like where are second hands in your
          town, price per kilo or day when new stuff arives!{" "}
        </p>
      </div>
      <div style={{ textAlign: "center", margin: "5rem auto" }}>
        <h2>Where are we?</h2>
        <h3 style={{ fontWeight: "300" }}>select the city:</h3>
        {cities.map((city) => (
          <Button
            color="secondary"
            variant="contained"
            key={city.name}
            onClick={() => handleLocation(city)}
          >
            {city.name}
          </Button>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Location;
