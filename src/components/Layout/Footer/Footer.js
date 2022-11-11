import React from "react";
import "./Footer.scss";
import PaymentIcon from "@mui/icons-material/Payment";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
const Footer = () => {
  return (
    <div className="footers">
      <div className="topDiv">
        <div className="firstCart">
          <div className="icons">
            <PaymentIcon fontSize="80" />
          </div>
          <div className="payment">
            <p style={{ paddingLeft: "15px" }}>
              <span className="spanPayment">Payment</span> <br />
              Safe & fast
            </p>
          </div>
        </div>
        <div className="SecCart">
          <div className="icons">
            <LocalShippingIcon fontSize="80" />
          </div>
          <div className="payment">
            <p style={{ paddingLeft: "15px" }}>
              <span className="spanPayment">Shipment</span> <br />
              Free delivery
            </p>
          </div>
        </div>
        <div className="thiCart">
          <div className="icons">
            <ContactPhoneIcon fontSize="80" />
          </div>
          <div className="payment">
            <p style={{ paddingLeft: "15px" }}>
              <span className="spanPayment">+45 38 74 04 48</span> <br />
              Monday - Thursday: 8:30 — 15:30 <br />
              Friday: 9:00 — 15:30 <br />
              service@autoparts-24.com <br />
              sles@autoparts-24.com
            </p>
          </div>
        </div>
      </div>
      <div className="bottomDiv">
        <div className="cart">
          <h4>Autoparts24 ApS</h4>
          <p className="footerparagraphs">
            Autoparts24 ApS <br />
            Tomsgårdsvej 19, 1.
            <br />
            DK 2400 Copenhagen <br />
            Denmark <br />
            Sales tax identification number: DK 39 89 47 26
          </p>
        </div>
        <div className="cart">
          <h4>About us</h4>
          <p className="footerparagraphs">
            We provide You with the largest selection of original car parts
            across the borders of Europe. You will get access to the largest
            digital market, with quick delivery from recognized suppliers.
          </p>
        </div>
        <div className="cart">
            <h4>Worth knowing</h4>
        </div>
        <div className="cart">
            <h4>Follow us</h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
