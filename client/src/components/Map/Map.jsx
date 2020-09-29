import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './marker.css'
import { markerSelect } from '../../store/actions';
import color from '../../data/color';

const Map = () => {

    const dispatch = useDispatch();

    const { lat, lng, zoom, maxBounds, pitch, name } = useSelector(state => state.location);
    const SELECTED = useSelector(state => state.isSelected);
    const CITY = name;

    const [map, setMap] = useState(null);
    const [markers, setMarkers] = useState(null);
    const mapContainer = useRef(null);
    const data = useSelector(state => state.shopsByLocation[CITY].items);

    mapboxgl.accessToken = 'pk.eyJ1IjoiYWxiaW5vcGxhbnQiLCJhIjoiY2s1cmQyZmNmMDA4ZDNubG9raTMwYWc2NCJ9.aGLZ5QbPXy528k8UMWyjRw';

    useEffect(() => {

        const initializeMap = ({ setMap, mapContainer }) => {
            const map = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/albinoplant/ck5s0v7we22rv1ipi6j3yenpw',
                center: [lng, lat],
                zoom,
                maxBounds,
                pitch,
                attributionControl: false
            });
            //Adding geolocation of the user
            map.addControl(
                new mapboxgl.GeolocateControl({
                    positionOptions: {
                    enableHighAccuracy: true
                    },
                    trackUserLocation: true
                })
            );
            // Creating empty array to add mapbox-gl markers
            let markerArray = [];

            data.forEach(item => {
                //In spite of accurate display the SVG box is 2X bigger than the animated icon itself
                //Clickable area is created inside the wrapper (styled in './marker.css')
                const marker = document.createElement('div');
                const wrapper = document.createElement('div');//tu był div
                marker.setAttribute('href',`#shop${item.id}`);
                marker.id = item.id;
                marker.classList = 'markers';
                wrapper.appendChild(marker);
                const newMarker = new mapboxgl.Marker(wrapper)
                    .setLngLat(item.geo);
                wrapper.style.backgroundImage = `url(${require('../../data/mark-trifto.svg')})`;
                wrapper.style.backgroundSize = 'cover';
                wrapper.style.width = '120px';
                wrapper.style.height = '120px';
                wrapper.style.transition= 'height 1s, width 1s';
                const textLabel = document.createElement('h3');

                textLabel.textContent = item.name;
                textLabel.style.color = color.primaryDark;
                marker.appendChild(textLabel);
                markerArray.push(newMarker);
            });
            map.on('load', () => {
                setMap(map);
                markerArray.forEach(item => item.addTo(map));
                map.resize();
                setMarkers(document.getElementsByClassName('markers'));
            });

        };
        // const initializeMarkerClicks = (markers, SELECTED) => {
        //     for(let i = 0; i < markers.length; i++){
        //         markers[i].addEventListener('click', (el) => {
        //             console.log(el.target)
        //             if(SELECTED===el.target.id){
        //                 dispatch(markerSelect(false));
        //                 //el.target.classList.remove('selected');
                        
        //                 }
        //             else if(el.target.id) {
        //                 dispatch(markerSelect(parseInt(el.target.id)));
        //                 el.target.classList.add('selected');
        //             }
        //         });
        //         if (markers[i].id!==SELECTED)
        //             markers[i].classList.remove('selected');
        //         if (markers[i].id===SELECTED)
        //             markers[i].classList.add('selected');
        //     }
        // }
        

        // const flyToMarker = (map, SELECTED) => {
            
        //     for(let i =0 ; i< data.length; i++){
        //         const shop = data[i];

        //         if(shop.id === SELECTED) 
        //             map.flyTo({
        //                 center: shop.geo,
        //                 zoom: 13
        //             })
        //     }
        // }
        if (!map) initializeMap({ setMap, mapContainer});
        // if (markers) {
        //     setMarkers(document.getElementsByClassName('markers'));
        //     initializeMarkerClicks(markers);
        //     flyToMarker(map, SELECTED);
        // };
    }, [map, CITY, data, lat, lng, zoom, maxBounds, pitch, markers, SELECTED, dispatch]);

    useEffect(()=>{
        const initializeMarkerClicks = (markers) => {
            for(let i = 0; i < markers.length; i++){
                markers[i].addEventListener('click', (el) => {
                    if(el.target.id)
                        dispatch(markerSelect(parseInt(el.target.id)));
                });
            }
        }
        

        const flyToMarker = (map, SELECTED) => {
            
            for(let i =0 ; i< data.length; i++){
                const shop = data[i];

                if(shop.id === SELECTED) 
                    map.flyTo({
                        center: shop.geo,
                        zoom: 13
                    })
            }
        }
        const checkMarkers = (markers, SELECTED)=> {
            for(let i = 0; i < markers.length; i++){
                console.log(typeof markers[i].id, typeof SELECTED)
                if (parseInt(markers[i].id)!==SELECTED)
                    markers[i].classList.remove('selected');
                if (parseInt(markers[i].id)===SELECTED){
                    markers[i].classList.add('selected');}
                }
        }
        if(markers){
            initializeMarkerClicks(markers);
            flyToMarker(map, SELECTED);
            checkMarkers(markers,SELECTED);
        };
            
    },[SELECTED,markers,map,data,dispatch])

    return (
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <div className='mapContainer'
                ref={el => (mapContainer.current = el)}
                style={{
                    position: "absolute",
                    top: "0",
                    width: "100%",
                    bottom: "0",
                    minHeight: "300px"
                    // borderRadius: "1rem"
                }}
            />
        </div>
    )
}

export default Map;