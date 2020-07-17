import React from 'react'

const WorkinghoursList = ({shop}) => (
    <ul className="workinghours">
        {shop.workinghours.map((h,i)=>(
            <li key={i}>{h} </li>
        ))}
    </ul>
);

export default WorkinghoursList;