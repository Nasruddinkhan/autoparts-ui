import React from "react";
import StarRating from "react-svg-star-rating";
import "./AboutAutoParts.scss";

const AboutAutoParts = () => {
  return (
    <div className="about-container">
      <div className="about-left-container">
        <h3 className="heading">About Autoparts24</h3>
        <p className="paragraphs">
          The idea of collecting used spare parts from different car chippers
          and selling them across borders started already in 2005. Autoparts24
          wanted to make it cheap and convenient for the customer to find the
          right used spare parts in one and the same marketplace.{" "}
        </p>
        <div className="tp-widget-logo">
           <StarRating /> 
        </div>
      </div>
      <div className="about-right-container"></div>
    </div>
  );
};
export default AboutAutoParts;
