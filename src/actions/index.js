export const initialLocation = () => {
    return {
        type: 'SZCZECIN_INIT'
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
