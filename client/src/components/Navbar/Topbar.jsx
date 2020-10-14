import React from 'react';
import {Link} from "react-router-dom"
import Logo from '../../data/trifto_logo'

const Topbar = ({city, icon}) => {

  return ( 
      <div className='nav-top'>
        {icon?icon():''}
        <Link to="/"><Logo/></Link>
        <h1 style={{ 
          fontWeight: '300', 
          fontSize: '1rem', 
          paddingTop: '1rem' 
          }}
        >{(city?city:"").toLowerCase()}</h1>
      </div>
      
  );
}
 
export default Topbar;