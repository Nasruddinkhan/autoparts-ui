import React from "react";
import "./BrandStory.scss";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import PeopleIcon from "@mui/icons-material/People";
import AssignmentReturnIcon from "@mui/icons-material/AssignmentReturn";
const BrandStory = () => {
  return (
    <div className="brandStory">
      <div className="brandCard">
        <div className="brandicons">
          <ForwardToInboxIcon className="fontsSize" />
        </div>
        <div className="brand-pagragraph">Sign up Newsletter</div>
      </div>
      <div className="brandCard">
        <div className="brandicons">
          <PeopleIcon className="fontsSize" />
        </div>
        <div className="brand-pagragraph">FAQ</div>
      </div>
      <div className="brandCard">
        <div className="brandicons">
          <AssignmentReturnIcon className="fontsSize" />
        </div>
        <div className="brand-pagragraph"> Returns & Complaints</div>
      </div>
    </div>
  );
};

export default BrandStory;
