import React from 'react';
import { Container } from 'react-bootstrap';
import Logo from '../../data/trifto_logo'

const Navbar = () => {
    return (
        <nav>
           <Container>
               <Logo style={{width:'100%', padding: '4rem'}} />
           </Container>
        </nav>
      );
}
 
export default Navbar;
