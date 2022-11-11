import { Fragment } from "react";
import "./Header.scss";
import logos from "../../../assets/img/logos.jpeg";
import { NavLink } from "react-router-dom";
import HeaderCartButton from "./Cart/HeaderCartButton";
const Header = () => {
  return (
    <Fragment>
      <div className="headers">
        <div className="left-item">
          <img className="brands" src={logos} alt="Not found" />
        </div>
        <div className="right-item">
          <div className="login">
            <NavLink className="btn_login" to="/about-us">
              About
            </NavLink>
            <NavLink className="btn_login" to="/faq">
              FAQ
            </NavLink>
            <NavLink className="btn_login" to="/all-part">
              All parts
            </NavLink>
            <NavLink className="btn_login" to="/engines">
              Used engines
            </NavLink>
            <NavLink className="btn_login" to="/gearbox">
              Used Gearboxes
            </NavLink>
            <NavLink className="btn_login" to="/guide">
              Guide
            </NavLink>
          </div>
          <HeaderCartButton/>
        </div>
      </div>
    </Fragment>
  );
};
export default Header;
