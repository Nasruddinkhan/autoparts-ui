import React, { useState } from "react";
import "./ProductDetails.scss";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button, Stack, Typography } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const ProductDetails = () => {
  const [showShipping, setShowShipping] = useState(false);

  const showShippingOptions = () => {
    setShowShipping(!showShipping);
  };

  return (
    <div className="productDetailsContainer">
      <div className="productColumn">
        <div className="product-item-row">
          <h3 className="product-itemheading">
            VW PASSAT (3B3) - A l b - brake parts
          </h3>
        </div>
        <div className="product-item-row">
          <div className="product-colum">
            <div className="product-detailItm">
              <span className="product-itmkey">Original Number:</span>
              <span className="product-itmVal">4D0907379D</span>
            </div>
            <div className="product-detailItm">
              <span className="product-itmkey">km:</span>
              <span className="product-itmVal">130.928</span>
            </div>
            <div className="product-detailItm">
              <span className="product-itmkey">Year:</span>
              <span className="product-itmVal">1996</span>
            </div>
            <div className="product-detailItm">
              <span className="product-itmkey">Article Number:</span>
              <span className="product-itmVal">G_0001_0053802PI0100</span>
            </div>

            <div className="product-detailItm">
              <span className="product-itmkey">VIN-Number:</span>
              <span className="product-itmVal">WAUZZZ8DZTA211463</span>
            </div>
            <div className="product-detailItm">
              <span className="product-itmkey">Position:</span>
              <span className="product-itmVal"></span>
            </div>
            <div className="product-detailItm">
              <span className="product-itmkey">Brand:</span>
              <span className="product-itmVal">Audi</span>
            </div>
          </div>
        </div>
        <div className="product-item-row">
          <div className="buyMain">
            <h2 className="product-itemheading" style={{ color: "white" }}>
              119,70 EUR
            </h2>
            <div className="product-detailItm">
              <span className="product-itmkey" style={{ color: "white" }}>
                Original Number:
              </span>
              <span className="product-itmVal">4D0907379D</span>
            </div>
            <Button
              color="success"
              variant="outlined"
              style={{ backgroundColor: "white" }}
              endIcon={<ShoppingCartIcon />}
            >
              Add To Cart
            </Button>
            <div className="product-detailItm">
              <span className="product-itmkey" style={{ color: "white" }}>
                Estimated shippingtime 4-5 workdays
              </span>
            </div>
          </div>
        </div>
        <div className="product-item-row">
          <div className="product-colum">
            <div className="product-shiping-out" onClick={showShippingOptions}>
              <Stack direction="row" alignItems="center" gap={1}>
                <LocalShippingIcon fontSize="large" />
                <Typography variant="body1" className="shipping-paragraph">
                  Show all delivery options
                </Typography>
              </Stack>
            </div>
          </div>
        </div>
        {showShipping && (
          <div className="product-item-row">
            <div className="colum columStyle">
              <Stack direction="row" alignItems="center" gap={1}>
                <LocalShippingIcon fontSize="large" />
                <Typography variant="body1" className="shipping-paragraph">
                  <div className="detailItm" style={{ marginBottom: "0" }}>
                    <span className="itmkey"> Express delivery:</span>
                    <span className="itmVal"> + 37,34 EUR</span>
                  </div>
                  <div className="detailItm">
                    <span className="itmkey"> Estimated shippingtime:</span>
                    <span className="itmVal"> 1-3 workdays</span>
                  </div>
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" gap={1}>
                <LocalShippingIcon fontSize="large" />
                <Typography variant="body1" className="shipping-paragraph">
                  <div className="detailItm" style={{ marginBottom: "0" }}>
                    <span className="itmkey">Standard delivery:</span>
                    <span className="itmVal"> Free</span>
                  </div>
                  <div className="detailItm">
                    <span className="itmkey"> Estimated shippingtime:</span>
                    <span className="itmVal"> 4-5 workdays</span>
                  </div>
                </Typography>
              </Stack>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
