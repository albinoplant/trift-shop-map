import React from 'react';
import color from '../../data/color';
import './button.css';

const ButtonMain = ({children, onClick}) => {
    return ( 
        <button onClick={onClick} style={styles}>
            {children}
        </button>
     );
}
 
export default ButtonMain;

const styles = 
{ 
    backgroundColor: color.primary,
    padding: "0.5rem 1rem",
    margin: "auto 0.5rem",
    border: "none",
    boxShadow: "2px 2px 4px 2px rgba(0,0,0,0.05)",
    fontSize: "200%",
    borderBottom: `solid 2px ${color.primaryDark}`,
    color: 'white',
    cursor: 'pointer'
  
}
