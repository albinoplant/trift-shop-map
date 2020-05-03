import React from 'react';
import Topbar from '../Navbar/Topbar';
import ButtonMain from '../Button/ButtonMain';
import { useDispatch } from 'react-redux';
import { initialLocation } from '../../actions';
import cities from '../../data/cities';

const Location = () => {
    const dispatch = useDispatch();
    return ( 
        <React.Fragment>
            <Topbar/>
            <div style={{padding:'1rem', backgroundColor: 'rgba(0,0,0,0.05)', zIndex:'0'}}>
                <h1>Trifto is your trift guide</h1>
                <p>It brings you all necessery info like where are second hands in your town, price per kilo or day when new stuff arives! </p>
            </div>
            <div style={{textAlign: 'center',
                        margin: '5rem auto'}}>
                <h2>Where are we?</h2>
                <h3 style={{fontWeight:"300"}}>select the city:</h3>
                <ButtonMain onClick={()=>  dispatch(initialLocation(cities.SZCZECIN)) }>Szczecin</ButtonMain>
                <ButtonMain>test</ButtonMain>
                <ButtonMain>test</ButtonMain>
            </div>
        </React.Fragment>

     );
}
 
export default Location;