import fetch from 'cross-fetch'

export const INITIATE_LOCATION = 'INITIATE_LOCATION'
export const MARKER_SELECTED = 'MARKER_SELECTED'
export const SELECT_LOCATION = 'SELECT_LOCATION'
export const REQUEST_LOCATION_SHOPS = 'REQUEST_LOCATION_SHOPS'
export const RECEIVE_LOCATION_SHOPS = 'RECEIVE_LOCATION_SHOPS'
export const USER_LOGGED = 'USER_LOGGED'

export const initialLocation = (location) => {
    return {
        type: INITIATE_LOCATION,
        location
    }
}
export const markerSelect = (id) => {
    return {
        type: MARKER_SELECTED,
        payload: id
    }
}
export function selectLocation(location) {
    return {
        type: SELECT_LOCATION,
        location
    }
}
function requestLocationShops(location) {
    return {
        type: REQUEST_LOCATION_SHOPS,
        location
    }
}
function recieveLocationShops(location, json) {
    return {
        type: RECEIVE_LOCATION_SHOPS,
        location,
        shops: json/*.data.children.map(child => child.data)*/,
        recievedAt: Date.now()
    }
}
function fetchShops(location) {
    return dispatch => {
        dispatch(requestLocationShops(location))
        return fetch(`/api/shops/${location}`)
            .then(response => response.json())
            .then(json => dispatch(recieveLocationShops(location,json)))
            .catch(error=>console.log(error))
    }
}
function shouldFetchShops(state, location) {
    const shops = state.shopsByLocation[location]
    if (!shops) {
        return true
    } else if (shops.isFetching) {
        return false
    }
}
export function fetchShopsIfNeeded(location) {
    return (dispatch, getState) => {
        if (shouldFetchShops(getState(), location)) {
            return dispatch(fetchShops(location))
        } else {
            return Promise.resolve()
        }
    }
}

export function loggUser(id) {
    return{
        type: USER_LOGGED,
        payload: id
    }
}