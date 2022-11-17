import React, { Fragment } from "react";
import "./Item.scss";
const Item = () => {
  return (
    <Fragment>
      <div className="snip1418">
        <img
          src="https://img.autoparts24.eu/images/original/G/0001/0053802PI0100_0.jpg"
          alt="sample96"
        />
        <div class="add-to-cart">
          <i class="ion-android-add"></i>
          <span>Add to Cart</span>
        </div>
        <figcaption>
          <h4>Audi - A4 (8D2, B5) - A b s - eletronic box</h4>
          <p>
            If you do the job badly enough, sometimes you don't get asked to do
            it again.{" "}
          </p>
          <div class="price">
            <s>$24.00</s>$19.00
          </div>
        </figcaption>
      </div>
    </Fragment>
  );
};

export default Item;
