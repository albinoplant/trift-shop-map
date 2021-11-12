import { createContext, useState, useMemo } from "react";
import shops from "data/szczecin.json";
const GeoContext = createContext({
  location: null,
  selectedMarker: null,
  setSelectedMarker: () => {},
  setLocation: () => {},
});

export const GeoProvider = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [selectedMarker, setSelectedMarker] = useState(false);
  const value = useMemo(
    () => ({ location, setLocation, selectedMarker, setSelectedMarker, shops }),
    [location, selectedMarker]
  );
  return <GeoContext.Provider value={value}>{children}</GeoContext.Provider>;
};

export default GeoContext;
