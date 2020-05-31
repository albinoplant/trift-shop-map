import React from 'react';
import ShopExtended from './ShopExtended';
import { markerSelect } from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const ShopList = ({ shops }) => {
    const SELECTED = useSelector(state => state.isSelected);
    const dispatch = useDispatch();
    useEffect(()=>{
        const shopElements = document.getElementsByClassName('shop');
        for (const item of shopElements) {
            if( item.id === SELECTED ){
                item.classList.add('selected-list-item');
            }else{
                item.classList.remove('selected-list-item');
            }
        };
    },[SELECTED]);

    return (
            <ul className='shop-list'>
                {/* <li className="list-start" /> */}
                {shops.map(shop => (
                    <li className='shop' key={shop.id} onClick={() => {
                        const isItemSelected = SELECTED === shop.id ? false : shop.id;
                        dispatch(markerSelect(isItemSelected));
                    }}>
                        <h2>
                            {shop.name}
                            <span style={{ fontWeight: '300', fontSize: '70%' }}> {shop.address}</span>
                        </h2>
                        {SELECTED === shop.id && <ShopExtended shop={shop} />}
                    </li>
                ))}
                {/* <li className="list-stop" /> */}
            </ul>
    );
};
export default ShopList;