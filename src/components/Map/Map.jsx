import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import mapboxgl from 'mapbox-gl';
import "mapbox-gl/dist/mapbox-gl.css";
// import SelectedMarker from './SelectedMarker';
import { Container } from 'react-bootstrap';
import data from '../../data/geo.json'
import { currentLocation } from '../../actions';




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
                pitch
            });
            map.on('load', () => {
                setMap(map);
                map.resize();
                markerArray.forEach(item => item.addTo(map));
            });
        };
        let markerArray = []; 
        data.forEach( item => {
            const marker = document.createElement('div');
            const newMarker = new mapboxgl.Marker(marker)
                .setLngLat(item.geo);
            marker.style.backgroundImage=`url(${require( '../../data/mark-trifto.svg')})`;
            marker.style.backgroundSize = 'cover';
            marker.style.width = '140px';
            marker.style.height = '140px';
            marker.style.cursor = 'pointer';
            markerArray.push(newMarker);
        });
        // const newMarker = new mapboxgl.Marker(marker)
        //     .setLngLat([14.55382, 53.4330345]);
        // const marker = document.createElement('div');
        // marker.className = 'marker';
        // marker.style.backgroundImage=`url(${require( '../../data/mark-trifto.svg')})`;
        // marker.style.backgroundSize = 'cover';
        // marker.style.width = '140px';
        // marker.style.height = '140px';

        // map.on('move', () => {
        //     const {lng, lat} = map.getCenter();
        //     dispatch(currentLocation([lng,lat]));
        // })

        if (!map) initializeMap({ setMap, mapContainer });
    }, [map]);

    return (
        <Container className="m-0 p-0" style={{ position: "relative", maxWidth: "100%", height: "100%", }}>
            <div className='mapContainer'
                ref={el => (mapContainer.current = el)}
                style={{
                    height: "100%",
                    width: "100%",
                    position: "absolute",
                    borderRadius: "1rem"
                }}
            >
            </div>

        </Container>
    )
}

export default Map;