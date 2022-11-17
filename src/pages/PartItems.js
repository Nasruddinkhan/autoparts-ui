import { Button } from "@mui/material";
import React, { Fragment } from "react";
import Item from "../components/Items/Item";
import SearchItem from "../components/SearchItem/SearchItem";
import AutorenewIcon from '@mui/icons-material/Autorenew';
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
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <div className="cartbutton">
          <Button variant="contained" endIcon={<AutorenewIcon />}>
               Load More
              </Button>
          </div>
        </div>
        
      </div>
    </Fragment>
  );
};

export default PartItems;
