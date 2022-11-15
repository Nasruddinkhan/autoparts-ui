import React, { Fragment } from "react";
import Item from "../components/Items/Item";
import SearchItem from "../components/SearchItem/SearchItem";
import "./PartItems.scss";
const PartItems = () => {
  return (
    <Fragment>
      <div className="partitems">
        <div className="searchItem">
          <SearchItem />
        </div>
        <div className="cardItem">
          <Item />
        </div>
      </div>
    </Fragment>
  );
};

export default PartItems;
