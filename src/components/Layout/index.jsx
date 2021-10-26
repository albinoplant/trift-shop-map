import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "./layout.css";

const Layout = ({ children, nav }) => {
  return (
    <div className="layout">
      {children}
      <Navbar>{nav}</Navbar>
      <Footer />
    </div>
  );
};

export default Layout;
