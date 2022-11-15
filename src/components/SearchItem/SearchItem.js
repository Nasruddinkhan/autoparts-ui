import React from "react";
import ComboBox from "../ComboBox/ComboBox";
import "./SearchItem.scss";
import { top100Films } from "./../../data";
import MinimumDistanceSlider from "../Slider/MinimumDistanceSlider";
import { TextField } from "@mui/material";

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
    <div className="searchRowForm" >
        <MinimumDistanceSlider label="km"/>
        <TextField id="outlined-basic" label="Outlined" className="firstField" variant="outlined" />
        <TextField id="outlined-basic" label="Outlined" className="secondField" variant="outlined" />

    </div>
  </div>;
};

export default SearchItem;
