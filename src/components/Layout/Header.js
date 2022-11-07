import { Fragment } from "react";
import "./Header.scss";
import logos from "../../assets/img/logos.jpeg";
import HeaderCartButton from "./HeaderCartButton";
const Header = () => {
  return (
    <Fragment>
      <div className="headers">
        <div className="left-item">
          <img className="brands" src={logos} alt="Not found" />
        </div>
        <div className="right-item">
          <div className="login">
            <a className="btn_login" href="/sdsd">
              About
            </a>
            <a className="btn_login" href="/sdsd">
              FAQ
            </a>
            <a className="btn_login" href="/sdsd">
              All parts
            </a>
            <a className="btn_login" href="/sdsd">
              Used engines
            </a>
            <a className="btn_login" href="/sdsd">
              Used Gearboxes
            </a>
            <a className="btn_login" href="/sdsd">
              Guide
            </a>
            
          </div>
          <HeaderCartButton/>
        </div>
      </div>
    </Fragment>
  );
};
export default Header;
