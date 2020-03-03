import React from 'react';
import Logo from '../../data/trifto_logo'
import { useSelector } from 'react-redux'
import SelectedMarker from './SelectedMarker'
import GeneralOptions from './GeneralOptions'
import shops from '../../data/szczecin.json'

const Navbar = () => {
  const SELECTED = useSelector(state => state.isSelected);
  const selectedDetails = shops.find(x => x.id === SELECTED);
  return (
    <nav style={{ display: "flex" }}>
      <Logo /><h1 style={{ fontWeight: '300', fontSize: '1rem', paddingTop: '1rem' }} >szczecin</h1>
      {SELECTED && <SelectedMarker details={selectedDetails} />}
      {!SELECTED && <GeneralOptions shops={shops} />}
    </nav>
  );
}

export default Navbar;
