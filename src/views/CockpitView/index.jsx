import React from "react";
import Map from "components/Map";
import Layout from "components/Layout";
import ShopList from "components/ShopList/ShopList";
import shops from "data/szczecin.json";

function Cockpit() {
  console.log("Cockpit");
  return (
    <Layout nav={<ShopList shops={shops} />}>
      <Map />
    </Layout>
  );
}

export default Cockpit;
