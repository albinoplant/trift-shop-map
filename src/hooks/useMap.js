import { useCallback, useState, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "components/Map/marker.css";
import useGeo from "hooks/useGeo";

const useMap = () => {
  const mapContainer = useRef(null);
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState(null);
  const {
    location: { maxBounds, pitch, center },
    selectedMarker,
    setSelectedMarker,
  } = useGeo();
  mapboxgl.accessToken =
    "pk.eyJ1IjoiYWxiaW5vcGxhbnQiLCJhIjoiY2s1cmQyZmNmMDA4ZDNubG9raTMwYWc2NCJ9.aGLZ5QbPXy528k8UMWyjRw";

  const handleMap = useCallback(() => {
    if (!map)
      initializeMap(setMap, mapContainer, center, maxBounds, pitch, setMarkers);
    if (markers) {
      setMarkers(document.getElementsByClassName("markers"));
      initializeMarkerClicks(markers, selectedMarker, setSelectedMarker);
      flyToMarker(map, selectedMarker);
    }
  }, [
    map,
    markers,
    maxBounds,
    pitch,
    center,
    selectedMarker,
    setSelectedMarker,
  ]);

  return { mapContainer, handleMap };
};
const flyToMarker = (map, selectedMarker) => {
  const data = require("data/szczecin.json");
  for (let i = 0; i < data.length; i++) {
    const shop = data[i];

    if (shop.id === selectedMarker)
      map.flyTo({
        center: shop.geo,
        zoom: 15,
      });
  }
};
const initializeMarkerClicks = (markers, selectedMarker, setSelectedMarker) => {
  for (let i = 0; i < markers.length; i++) {
    if (selectedMarker === markers[i].id) {
      markers[i].classList.add("selected");
    } else {
      markers[i].classList.remove("selected");
    }
    markers[i].addEventListener("click", (el) => {
      if (selectedMarker === el.target.id) {
        setSelectedMarker(false);
        el.target.classList.remove("selected");
      } else {
        setSelectedMarker(el.target.id);
        el.target.classList.add("selected");
      }
    });
  }
};
const initializeMap = (
  setMap,
  mapContainer,
  center,
  maxBounds,
  pitch,
  setMarkers
) => {
  const map = new mapboxgl.Map({
    container: mapContainer.current,
    style: "mapbox://styles/albinoplant/ck5s0v7we22rv1ipi6j3yenpw",
    center,
    zoom: 10,
    maxBounds,
    pitch,
    attributionControl: false,
  });

  // Creating empty array to add mapbox-gl markers
  let markerArray = [];

  const data = require("data/szczecin.json");
  data.forEach((item) => {
    //In spite of accurate display the SVG box is 2X bigger than the animated icon itself
    //Clickable area is created inside the wrapper (styled in './marker.css')
    const marker = document.createElement("div");
    const wrapper = document.createElement("div");
    marker.id = item.id;
    marker.classList = "markers";
    wrapper.appendChild(marker);
    const newMarker = new mapboxgl.Marker(wrapper).setLngLat(item.geo);
    wrapper.style.backgroundImage = "url(/resources/mark-trifto.svg)";
    wrapper.style.backgroundSize = "cover";
    wrapper.style.width = "140px";
    wrapper.style.height = "140px";
    wrapper.style.transition = "height 1s, width 1s";
    markerArray.push(newMarker);
  });
  map.on("load", () => {
    setMap(map);
    markerArray.forEach((item) => item.addTo(map));
    map.resize();
    setMarkers(document.getElementsByClassName("markers"));
  });
};

export default useMap;
