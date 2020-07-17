import React from 'react'

const PricesList = ({shop}) => (
    <ul className="prices">
        {shop.priceperkilo.map((kg,i)=>(
            kg===0?"closed":<li key={i}>{kg} PLN</li>
        ))}
    </ul>
);

export default PricesList;