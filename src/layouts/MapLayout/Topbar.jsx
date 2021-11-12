import React from 'react';
import Logo from 'data/trifto_logo'

const Topbar = () => {
    return ( 
      <div className='nav-top'>
        <Logo />
        <h1 style={{ 
          fontWeight: '300', 
          fontSize: '1rem', 
          paddingTop: '1rem' 
          }}
        >szczecin</h1>
      </div>
     );
}
 
export default Topbar;