
const locationReducer = (state=null, action) => {
    switch (action.type) {
        case 'INITIATE_LOCATION':
            return action.location;
        case 'CURRENT_LOCATION':
            return action.center;
        default:
            return state;
    }
}
export default locationReducer;