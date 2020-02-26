const SZCZECIN = {
    lng: 14.550,
    lat: 53.430,
    zoom: 15,
    maxBounds: [[14.450, 53.380], [14.650, 53.480]],
    pitch: 20
}

const locationReducer = (state = SZCZECIN, action) => {
    switch (action.type) {
        case 'SZCZECIN_INIT':
            return SZCZECIN;
        case 'CURRENT_LOCATION':
            return action.center;
        default:
            return state;
    }
}
export default locationReducer;