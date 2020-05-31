import { INITIATE_LOCATION } from "../actions";

const locationReducer = (state=null, action) => {
    switch (action.type) {
        case INITIATE_LOCATION:
            return action.location;
        default:
            return state;
    }
}
export default locationReducer;