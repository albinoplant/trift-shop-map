import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './layout.css';


const Layout = ({ children }) => {

    return (
        <div className="layout">
            {children}
            <Navbar />
            <Footer />
        </div>
    );
}

export default Layout;