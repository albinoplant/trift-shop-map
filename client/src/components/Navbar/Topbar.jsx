import React from 'react';
import Logo from '../../data/trifto_logo'

const Topbar = ({city, icon}) => {

  return ( 
      <div className='nav-top'>
        {icon?icon():''}
        <Logo>
          <Link/>
        <Logo/>
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