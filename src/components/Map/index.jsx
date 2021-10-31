import React, { useEffect } from "react";
import useMap from "hooks/useMap";

const Map = () => {
  const { handleMap, mapContainer } = useMap();
  useEffect(() => {
    handleMap();
  }, [handleMap]);
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <div
        className="mapContainer"
        ref={(el) => (mapContainer.current = el)}
        style={{
          position: "absolute",
          top: "0",
          width: "100%",
          bottom: "0",
          minHeight: "300px",
          // borderRadius: "1rem"
        }}
      />
    </div>
  );
};

export default Map;
