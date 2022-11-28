import React from "react";
import ComboBox from "../ComboBox/ComboBox";
import "./SearchItem.scss";
import { top100Films } from "./../../data";
import MinimumDistanceSlider from "../Slider/MinimumDistanceSlider";
import { Button, TextField } from "@mui/material";

const SearchItem = () => {
  return (
    <div className="searchcontainer">
      <div className="searchRow">
        <h3 className="searchHeading">Parts Filters</h3>
      </div>
      <div className="searchRowForm">
        <ComboBox top100Films={top100Films} label="My Car" />
      </div>
      <div className="searchRowForm">
        <ComboBox top100Films={top100Films} label="My Model" />
      </div>
      <div className="searchRowForm">
        <MinimumDistanceSlider label="km" />
      </div>
      <div className="searchRowForm">
        <MinimumDistanceSlider label="Price" />
      </div>
      <div className="searchRowForm">
        <MinimumDistanceSlider label="Year" />
      </div>
      <div className="searchRowForm">
        <TextField sx={{ width: "100%" , padding: "1rem"}}/>
      </div>

      <div className="searchRowForm">
        <Button sx={{ width: "100%" , padding: "1rem"}} variant="contained"> Search </Button>
      </div>
    </div>
  );
};

export default SearchItem;
