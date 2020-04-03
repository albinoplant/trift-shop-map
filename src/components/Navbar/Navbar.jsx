import React from 'react';
import Logo from '../../data/trifto_logo'
import ShopList from './ShopList'
import shops from '../../data/szczecin.json'
import './navbar.css'

const Navbar = () => {
  return (
    <nav>
      <div className='nav-top'>
        <Logo />
        <h1 style={{ 
          fontWeight: '300', 
          fontSize: '1rem', 
          paddingTop: '1rem' 
          }}
        >szczecin</h1>
      </div>
      <ShopList shops={shops} />
    </nav>
  );
}

export default Navbar;
