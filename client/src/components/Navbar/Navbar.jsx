import React from 'react';
import ShopList from './ShopList'
import shops from '../../data/szczecin.json'
import './navbar.css'
import Topbar from './Topbar';

const Navbar = () => {
  return (
    <nav>
      <Topbar/>
      <ShopList shops={shops} />
    </nav>
  );
}

export default Navbar;
