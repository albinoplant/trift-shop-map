import React from "react";
import Topbar from "../Navbar/Topbar";
import ButtonMain from "../Button/ButtonMain";
import { useDispatch} from "react-redux";
import { initialLocation, fetchShopsIfNeeded } from "../../store/actions";
import { SZCZECIN } from "../../data/cities";
import icon from '../../data/account.jsx';
import './location.css';
import colors from '../../data/color';

const Location = () => {
  
  const dispatch = useDispatch();

  const handleLocation = (LOCATION) => {
    dispatch(initialLocation(LOCATION));
    dispatch(fetchShopsIfNeeded(LOCATION.name));
  };

  return (
    <React.Fragment>
      <Topbar icon={icon}/>
      <div className="hello-box"
        style={{
          padding: "1rem",
          backgroundColor: `${colors.background}`,
          zIndex: "0",
        }}
      >
        <h1><span style={{color:`${colors.primary}`}}>Trifto </span> is your trift guide</h1>
        <p>
          It brings you all necessery info like where are second hands in your
          town, price per kilo or day when new stuff arives!{" "}
        </p>
      </div>
      <div style={{ textAlign: "center", margin: "5rem auto" }}>
        <h2>Where are we?</h2>
        <h3 style={{ fontWeight: "300" }}>select the city:</h3>
        <ButtonMain onClick={() => handleLocation(SZCZECIN)}>
          Szczecin
        </ButtonMain>
        <ButtonMain>more cities SOON</ButtonMain>
      </div>
    </React.Fragment>
  );
};

export default Location;
