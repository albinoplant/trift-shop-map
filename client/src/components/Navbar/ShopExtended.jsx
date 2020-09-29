import React from 'react';
import PricesList from './PricesList';
import WorkinghoursList from './WorkinghoursList';
import PriceInputForm from './PriceInputForm';
import WorkinghoursInputForm from './WorkinghoursInputForm';

const ShopExtended = ({shop}) => {
    

    return ( 
        <div className="shops-extended">
            <div>
                {shop.priceperkilo?<PricesList shop={shop}/>:<PriceInputForm/>}
                {shop.workinghours?<WorkinghoursList shop={shop}/>:<WorkinghoursInputForm/>}
            </div>
        </div>
        );
}
 
export default ShopExtended;