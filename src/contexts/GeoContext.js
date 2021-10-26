import { createContext, useState, useMemo } from "react";

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
    () => ({ location, setLocation, selectedMarker, setSelectedMarker }),
    [location, selectedMarker]
  );
  return <GeoContext.Provider value={value}>{children}</GeoContext.Provider>;
};

export default GeoContext;
