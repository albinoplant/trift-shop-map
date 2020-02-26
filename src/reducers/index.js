import locationReducer from './locationReducer'
import isSelectedReducer from './isSelectedReducer'
import { combineReducers } from 'redux'



 const allReducers = combineReducers({
    location: locationReducer,
    isSelected: isSelectedReducer
});

export default allReducers;