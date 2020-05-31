import { MARKER_SELECTED } from "../actions";

const isSelected = (state = false, action) => {
    switch (action.type) {
        case MARKER_SELECTED:
            return action.payload
        default:
            return state
    };
};
export default isSelected