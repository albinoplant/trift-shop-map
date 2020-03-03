import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './marker.css'
import { markerSelect, markerDeselect } from '../../actions';



const Map = () => {
    const { maxBounds, pitch } = useSelector(state => state.location);
    const SELECTED = useSelector(state => state.isSelected);
    const mapContainer = useRef(null);
    const dispatch = useDispatch();

    const [map, setMap] = useState(null);
    const [markers, setMarkers] = useState(null);

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

            // Creating empty array to add mapbox-gl markers
            let markerArray = [];

            const data = require('../../data/szczecin.json');
            data.forEach(item => {
                //In spite of accurate display the SVG box is 2X bigger than the animated icon itself
                //Clickable area is created inside the wrapper (styled in './marker.css')
                const marker = document.createElement('div');
                const wrapper = document.createElement('div');
                marker.id = item.id;
                marker.classList = 'markers'
                wrapper.appendChild(marker);
                const newMarker = new mapboxgl.Marker(wrapper)
                    .setLngLat(item.geo);
                wrapper.style.backgroundImage = `url(${require('../../data/mark-trifto.svg')})`;
                wrapper.style.backgroundSize = 'cover';
                wrapper.style.width = '140px';
                wrapper.style.height = '140px';
                wrapper.style.transition= 'height 1s, width 1s';
                markerArray.push(newMarker);
            });
            map.on('load', () => {
                setMap(map);
                markerArray.forEach(item => item.addTo(map));
                map.resize();
                setMarkers(document.getElementsByClassName('markers'));
            });
        };
        const initializeMarkerClicks = (markers) => {
            for(let i = 0; i < markers.length; i++){
               markers[i].addEventListener('click', (el) => {
                    if(SELECTED===el.target.id){
                        dispatch(markerDeselect())
                        el.target.classList.remove('selected');
                        }
                    else {
                        dispatch(markerSelect(el.target.id));
                        el.target.classList.add('selected');
                    }
                });
            }
        }
        if (!map) initializeMap({ setMap, mapContainer});
        if (markers) {
            setMarkers(document.getElementsByClassName('markers'));
            initializeMarkerClicks(markers);
        };
    }, [map, maxBounds, pitch, markers, SELECTED, dispatch]);


    return (
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <div className='mapContainer'
                ref={el => (mapContainer.current = el)}
                style={{
                    position: "absolute",
                    top: "0",
                    width: "100%",
                    bottom: "0",
                    borderRadius: "1rem"
                }}
            />
        </div>
    )
}

export default Map;