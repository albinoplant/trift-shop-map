import mapboxgl from 'mapbox-gl';

// Creating empty array to add mapbox-gl markers
export let markerArray = [];

const data = require('../../data/szczecin.json');
data.forEach(item => {
    //In spite of accurate display the SVG box is 2X bigger than the animated icon itself
    //Clickable area is created inside the wrapper (styled in './marker.css')
    const marker = document.createElement('div');
    const wrapper = document.createElement('div');
    marker.id = item.id;
    marker.classList = 'markers'
    console.log(marker)
    wrapper.appendChild(marker);
    const newMarker = new mapboxgl.Marker(wrapper)
        .setLngLat(item.geo);
    wrapper.style.backgroundImage = `url(${require('../../data/mark-trifto.svg')})`;
    wrapper.style.backgroundSize = 'cover';
    wrapper.style.width = '140px';
    wrapper.style.height = '140px';
    markerArray.push(newMarker);
});