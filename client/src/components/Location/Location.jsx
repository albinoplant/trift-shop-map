import React from "react";
import Topbar from "../Navbar/Topbar";
import ButtonMain from "../Button/ButtonMain";
import { useDispatch} from "react-redux";
import { initialLocation, fetchShopsIfNeeded } from "../../store/actions";
import { SZCZECIN } from "../../data/cities";
import icon from '../../data/account.jsx';
import Drawing from '../../data/drawing';
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
          paddingBottom: "2rem"
        }}
      >
        <Drawing style={{display:"table",margin:"auto"}}/>
        <h1><span style={{color:`${colors.primary}`}}>Trifto </span> is your trift guide</h1>
        <p className="hello-description">
          It brings you all the necessery info like where are second hands in your
          area, price per kilo or day when new stuff arives!{" "}
        </p>
      </div>
      <div className="hello-area" >
        <h2>Where are we?</h2>
        <h3 style={{ fontWeight: "300" }}>select the city:</h3>
        <ButtonMain to="/cockpit" onClick={() => handleLocation(SZCZECIN)}>
          Szczecin
        </ButtonMain>
        <ButtonMain className="soon">more cities SOON</ButtonMain>
      </div>
    </React.Fragment>
  );
};

export default Location;
