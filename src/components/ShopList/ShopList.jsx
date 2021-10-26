import React from "react";
import { useEffect } from "react";
import useGeo from "hooks/useGeo";
import ShopListItem from "./ShopListItem";

const ShopList = ({ shops }) => {
  const { setSelectedMarker: SELECTED } = useGeo();
  useEffect(() => {
    const shopElements = document.getElementsByClassName("shop");
    for (const item of shopElements) {
      if (item.id === SELECTED) {
        item.classList.add("selected-list-item");
      } else {
        item.classList.remove("selected-list-item");
      }
    }
  }, [SELECTED]);

  return (
    <ul className="shop-list">
      {shops.map((shop) => {
        return <ShopListItem key={shop.id} shop={shop} selected={SELECTED} />;
      })}
    </ul>
  );
};
export default ShopList;
