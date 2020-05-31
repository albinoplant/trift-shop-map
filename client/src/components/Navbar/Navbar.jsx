import React from 'react';
import { useSelector} from 'react-redux';
import ShopList from './ShopList';
import './navbar.css';
import Topbar from './Topbar';

const Navbar = () => {
  const name = useSelector(state => state.location.name);
  const shops = useSelector(state => state.shopsByLocation[name].items);


  return (
    <nav>
      <Topbar/>
      <ShopList shops={shops} />
    </nav>
  );
};

export default Navbar;
