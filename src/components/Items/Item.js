import { Box, Button } from "@mui/material";
import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Item.scss";
const Item = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <div className="item-container">
        <div className="item-row">
          <h3 className="itemheadin">VW PASSAT (3B3) - A l b - brake parts</h3>
        </div>
        <div className="item-row">
          <div className="colum">
            <img
              alt=""
              src="https://img.autoparts24.eu/images/original/G/0001/0053802PI0100_0.jpg"
              className="imgItem"
            />
          </div>
          <div className="colum">
            <div className="detailItm">
              <span className="itmkey">Original Number:</span>
              <span className="itmVal">4D0907379D</span>
            </div>
            <div className="detailItm">
              <span className="itmkey">km:</span>
              <span className="itmVal">130.928</span>
            </div>
            <div className="detailItm">
              <span className="itmkey">Year:</span>
              <span className="itmVal">1996</span>
            </div>
            <div className="detailItm">
              <span className="itmkey">Article Number:</span>
              <span className="itmVal">G_0001_0053802PI0100</span>
            </div>
            <div className="detailItm">
              <span className="itmkey">Brand:</span>
              <span className="itmVal">Audi</span>
            </div>
            <div className="detailItm">
              <span className="itmkey">VIN-Number:</span>
              <span className="itmVal">WAUZZZ8DZTA211463</span>
            </div>
            <span className="moredetails">More info</span>
          </div>
          <div className="colum">
            <div className="detailItm">
              <span className="itmkey">
                <h2 className="amountHeading">8W9,30 EUR</h2>
              </span>
            </div>
            <div className="detailItm">
              <span className="itmkey">Excl. Vat:</span>
              <span className="itmVal">89,30</span>
            </div>
            <div className="detailItm">
              <span className="itmkey">Delivery:</span>
              <span className="itmVal">4-5 workdays</span>
            </div>
              <Button variant="contained"  style={{marginTop:"15%"}} endIcon={<ShoppingCartIcon />}>
                Add to Cart
              </Button>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Item;
