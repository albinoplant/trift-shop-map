import React from 'react';
import ReactMapboxGl from "react-mapbox-gl";
import Markers from './Markers';
import { Container } from 'react-bootstrap';

const MyMap = ReactMapboxGl({
    accessToken: "pk.eyJ1IjoiYWxiaW5vcGxhbnQiLCJhIjoiY2s1cmQyZmNmMDA4ZDNubG9raTMwYWc2NCJ9.aGLZ5QbPXy528k8UMWyjRw"
})
const Map = () => {

    return(
        <Container className="m-0 p-0" style={{position:"relative", maxWidth: "100%", height: "100%", }}>
            <MyMap
                // eslint-disable-next-line
                style= 'mapbox://styles/albinoplant/ck5s0v7we22rv1ipi6j3yenpw'
                containerStyle={{
                    height: "100%",
                    width: "100%",
                    position:"absolute"
                }}
                center= {[14.550, 53.430]} //something from this setup will go to the state store
                zoom= {[10]}
                maxBounds= {[[14.450, 53.380],[14.650, 53.480]]}
                pitch= {[20]}
            >
                <Markers/>  
            </MyMap>
        </Container>
    )
}

export default Map;