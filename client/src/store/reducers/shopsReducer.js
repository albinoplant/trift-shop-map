import { REQUEST_LOCATION_SHOPS, RECEIVE_LOCATION_SHOPS } from "../actions";

function shops(
    state = {
        isFetching: false,
        items:[]
    },
    action
){
    switch (action.type) {
        case REQUEST_LOCATION_SHOPS:
            return Object.assign({}, state, {
                isFetching: true,
            })
        case RECEIVE_LOCATION_SHOPS:
            return Object.assign({}, state, {
                isFetching: true,
                items: action.shops,
                lastUpdated: action.recievedAt
            })
        default:
            return state
    }
}
function shopsByLocation(state = {}, action) {
    switch (action.type) {
        case RECEIVE_LOCATION_SHOPS:
        case REQUEST_LOCATION_SHOPS:
            return Object.assign({}, state, {
                [action.location]: shops(state[action.location], action)
            })
        default:
            return state
    }
}
export default shopsByLocation