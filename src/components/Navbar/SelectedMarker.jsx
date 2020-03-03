import React from 'react';


const SelectedMarker = ({ details }) => {
    return (
        <>
            <h1>ZAZNACZONY MARKER</h1>
            <p>{details.name}</p>
        </>
    );
};

export default SelectedMarker;