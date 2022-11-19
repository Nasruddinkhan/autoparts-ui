import React from "react";
import BrandStory from "../components/BrandStory/BrandStory";
import Swippers from "../components/Swippers/Swippers";
import "./Product.scss";
const Product = () => {
  return (
    <>
        <div className="productContainer">
      <div className="productImages">
        <Swippers/>
      </div>
      <div className="productDetails">
        details
      </div>

    </div>
          <BrandStory/>

    </>

  );
};

export default Product;
