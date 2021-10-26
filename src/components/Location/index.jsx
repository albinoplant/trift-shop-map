import React from "react";
import ButtonMain from "components/Button/ButtonMain";
import cities from "data/cities";
import useGeo from "hooks/useGeo";

const Location = () => {
  const { setLocation } = useGeo();
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
        <ButtonMain onClick={() => setLocation(cities.SZCZECIN)}>
          Szczecin
        </ButtonMain>
        <ButtonMain>test</ButtonMain>
        <ButtonMain>test</ButtonMain>
      </div>
    </React.Fragment>
  );
};

export default Location;
