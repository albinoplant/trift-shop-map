import React from 'react';
import Map from '../Map/Map'
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../Layout/Layout';

function App() {
  return (
    <React.Fragment>
      <Layout>
        <Map />
      </Layout>
    </React.Fragment>
  );
}

export default App;
