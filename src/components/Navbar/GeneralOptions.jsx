import React from 'react';
import { markerSelect } from '../../actions';
import { useDispatch } from 'react-redux';

const GeneralOptions = ({shops}) => {
    const dispatch = useDispatch();
    return(
    <ul>
        {shops.map(shop => (
            <li key={shop.id}><button onClick={() => {dispatch(markerSelect(shop.id))}}>{shop.name}</button></li>
        ))}
    </ul>);
};
export default GeneralOptions;