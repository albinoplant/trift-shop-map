import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Container, Row, Col } from 'react-bootstrap';

const Layout = ({ children }) => {

    return (
        <React.Fragment>
            <Container className="m-0 p-0" style={{ height: "100vh", maxWidth: "100%" }}>
                <Row className="m-0" style={{ height: "100vh" }}>
                    <Col className="p-0" sm={12} md={6}>
                        <Navbar />
                    </Col>
                    <Col className="p-0" sm={12} md={6} style={{overflow:"hidden"}}>
                        {children}
                    </Col>
                </Row>
            </Container>
            <Footer />
        </React.Fragment>
    );
}

export default Layout;