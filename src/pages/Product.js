import React, { Fragment } from "react";
import AdditionalDetails from "../components/AdditionalDetails/AdditionalDetails";
import BrandStory from "../components/BrandStory/BrandStory";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import Swippers from "../components/Swippers/Swippers";
import "./Product.scss";
const Product = () => {
  return (
    <Fragment>
      <div className="productContainer">
        <div className="productImages">
          <Swippers />
        </div>
        <div className="productDetails">
          <ProductDetails />
        </div>
      </div>
      <div className="productContainer">
        <AdditionalDetails/>
      </div>
      <BrandStory />
      
    </Fragment>
  );
};

export default Product;
