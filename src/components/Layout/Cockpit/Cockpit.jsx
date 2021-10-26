import React from 'react';
import Map from '../../Map/Map'
import Layout from '../index';
import ShopList from "components/ShopList/ShopList";
import shops from "data/szczecin.json";

function Cockpit() { 
  return <Layout nav={<ShopList shops={shops} />}><Map /></Layout>;
}

export default Cockpit;
