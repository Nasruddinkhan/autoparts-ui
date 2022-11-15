import React from "react";
import ComboBox from "../ComboBox/ComboBox";
import "./SearchItem.scss";
import { top100Films } from "./../../data";

const SearchItem = () => {
  return <div className="searchcontainer">
    <div className="searchRow">
        <h3 className="searchHeading">Parts Filters</h3>
    </div>
    <div className="searchRowForm" >
        <ComboBox top100Films={top100Films} label="My Car"/>
    </div>
    <div className="searchRowForm" >
        <ComboBox top100Films={top100Films} label="My Model"/>
    </div>
  </div>;
};

export default SearchItem;
