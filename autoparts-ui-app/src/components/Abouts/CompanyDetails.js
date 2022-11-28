import React from "react";
import "./CompanyDetails.scss";
const CompanyDetails = () => {
  return (
    <div className="about-company-container">
      <div className="left-container"></div>
      <div className="right-container">
        <div className="items">
          <div className="company-details">
            <h4 className="heading">Company details</h4>
            <p className="paragraphs">
              Tomsgårdsvej 19, 1.
              <br />
              DK 2400 Copenhagen <br />
              Denmark
            </p>
          </div>
          <div className="mangement">
            <h4 className="heading">Management</h4>
            <p className="paragraphs">
              Troels Meier &amp; Jesper Kristoffersen
            </p>
          </div>
          <div className="customer-service">
            <h4 className="heading">Customer Service</h4>
            <p className="paragraphs">
              <b>
                Feel free to call us at <span className="cust-span">+45 38 74 04 48</span>
              </b>
              <br/>
              or send us an e-mail to service@autoparts-24.com
            </p>
            <p className="paragraphs">Monday - Thursday: 
            <span className="noWrap">8.30 — 15.30</span><br/>Friday: <span className="noWrap">9.00 — 15.30</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
