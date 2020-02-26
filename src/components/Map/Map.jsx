import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './marker.css'
import { markerArray } from './Markers'
// import SelectedMarker from './SelectedMarker';
// import data from '../../data/geo.json';
//import { currentLocation } from '../../actions';



const Map = () => {
    const { maxBounds, pitch } = useSelector(state => state.location);
    const mapContainer = useRef(null);
    // const dispatch = useDispatch();

    const [map, setMap] = useState(null);

    mapboxgl.accessToken = 'pk.eyJ1IjoiYWxiaW5vcGxhbnQiLCJhIjoiY2s1cmQyZmNmMDA4ZDNubG9raTMwYWc2NCJ9.aGLZ5QbPXy528k8UMWyjRw';

    useEffect(() => {
        const initializeMap = ({ setMap, mapContainer }) => {
            const map = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/albinoplant/ck5s0v7we22rv1ipi6j3yenpw',
                center: [14.550, 53.430],
                zoom: 10,
                maxBounds,
                pitch,
                attributionControl: false
            });
            map.on('load', () => {
                setMap(map);
                markerArray.forEach(item => item.addTo(map));
                map.resize();
            });
        };
        if (!map) initializeMap({ setMap, mapContainer });
    }, [map]);

    return (
        <div style={{position: "relative", width:"100%", height:"100%"}}>
            <div className='mapContainer'
                ref={el => (mapContainer.current = el)}
                style={{
                    position: "absolute",
                    top: "0",
                    width:"100%",
                    bottom: "0",
                    borderRadius: "1rem"
                }}
            />
        </div>
    )
}

export default Map;