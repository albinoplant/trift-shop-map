import locationReducer from './locationReducer'
import isSelectedReducer from './isSelectedReducer'
import shopsReducer from './shopsReducer'
import { combineReducers } from 'redux'



 const allReducers = combineReducers({
    location: locationReducer,
    isSelected: isSelectedReducer,
    shopsByLocation: shopsReducer
});

export default allReducers;