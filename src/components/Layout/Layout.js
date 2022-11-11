import { Fragment } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Layout = (props) => {
    return (
      <Fragment>
        <Header />
        <div className="main">{props.children}</div>
        <Footer/>
      </Fragment>
    );
  };
  
  export default Layout;