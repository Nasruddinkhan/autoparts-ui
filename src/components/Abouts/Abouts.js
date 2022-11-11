import { Fragment } from "react";
import AboutAutoParts from "./AboutAutoParts";
import AboutQuality from "./AboutQuality";
import CompanyDetails from "./CompanyDetails";

const Abouts = () => {
  return (
    <Fragment>
      <AboutAutoParts />
       <AboutQuality/>
       <CompanyDetails/>
    </Fragment>
  );
};
export default Abouts;
