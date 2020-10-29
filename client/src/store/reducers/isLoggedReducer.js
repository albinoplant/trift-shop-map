import { USER_LOGGED } from "../actions";

const isSelected = (state = false, action) => {
    switch (action.type) {
        case USER_LOGGED:
            return action.payload
        default:
            return state
    };
};
export default isSelected