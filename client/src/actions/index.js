export const initialLocation = (location) => {
    return {
        type: 'INITIATE_LOCATION',
        location: location
    };
};
export const currentLocation = (center) => {
    return {
        type: 'CURRENT_LOCATION',
        center: center
    };
};
export const markerSelect = (id) => {
    return {
        type: 'MARKER_SELECTED',
        payload: id
    };
};
