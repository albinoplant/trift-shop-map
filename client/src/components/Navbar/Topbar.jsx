import React from 'react';
import Logo from '../../data/trifto_logo'

const Topbar = ({city}) => {
  console.log(city);
    return ( 
      <div className='nav-top'>
        <Logo />
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