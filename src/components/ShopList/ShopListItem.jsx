import React from "react";
import ShopExtended from "./ShopExtended";
import useGeo from "hooks/useGeo";

export default function ShopListItem({ shop }) {
  const { setSelectedMarker, selectedMarker: SELECTED } = useGeo();

  return (
    <li
      className="shop"
      key={shop.id}
      onClick={() => {
        const isItemSelected = SELECTED === shop.id ? false : shop.id;
        setSelectedMarker(isItemSelected);
      }}
    >
      <h2>
        {shop.name}
        <span style={{ fontWeight: "300", fontSize: "70%" }}>
          {shop.address}
        </span>
      </h2>
      {SELECTED === shop.id && <ShopExtended shop={shop} />}
    </li>
  );
}
