import { useEffect } from "react";
import useMap from "hooks/useMap";

const Map = () => {
  const { handleMap, mapContainer } = useMap();
  useEffect(() => {
    handleMap();
  }, [handleMap, mapContainer]);

  return (
    <div
      className="mapContainer"
      ref={(el) => (mapContainer.current = el)}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    />
  );
};

export default Map;
