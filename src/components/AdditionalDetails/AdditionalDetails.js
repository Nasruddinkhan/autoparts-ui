import React from "react";
import BasicTable from "../BasicTable/BasicTable";
import CardForSparePart from "../CardForSparePart/CardForSparePart";
import "./AdditionalDetails.scss";
const AdditionalDetails = () => {
  return (
    <div className="additionalDetailsContainer">
      <div className="additionalDetailsColumn">
        <div className="additionalDetails-row">
          <h3 className="additionalDetailsheading">Additional information</h3>
        </div>
        <div className="additionalDetails-row">
          <div className="additionalDetailsColumn">
            <h4 className="additionalDetailsheading">Article</h4>
            <div className="additionalDetails-detailItm">
              <span className="additionalDetails-itmkey">Article:</span>
              <span className="additionalDetails-itmVal"> ABS - sensor</span>
            </div>
            <div className="additionalDetails-detailItm">
              <span className="additionalDetails-itmkey">Article:</span>
              <span className="additionalDetails-itmVal"> #fff</span>
            </div>
            <div className="additionalDetails-detailItm">
              <span className="additionalDetails-itmkey">Color code:</span>
              <span className="additionalDetails-itmVal"> ABS - sensor</span>
            </div>
            <div className="additionalDetails-detailItm">
              <span className="additionalDetails-itmkey">Quality:</span>
              <span className="additionalDetails-itmVal"> B - Used part</span>
            </div>
            <div className="additionalDetails-detailItm">
              <span className="additionalDetails-itmkey">Position:</span>
              <span className="additionalDetails-itmVal"> front left</span>
            </div>
            <div className="additionalDetails-detailItm">
              <span className="additionalDetails-itmkey">Original Number:</span>
              <span className="additionalDetails-itmVal"> 10456686</span>
            </div>
          </div>
          <div className="additionalDetailsColumn">
            <h4 className="additionalDetailsheading">Car</h4>
            <div className="additionalDetails-detailItm">
              <span className="additionalDetails-itmkey">Brand:</span>
              <span className="additionalDetails-itmVal"> DAEWOO</span>
            </div>
            <div className="additionalDetails-detailItm">
              <span className="additionalDetails-itmkey">Model:</span>
              <span className="additionalDetails-itmVal"> KALOS (KLAS)</span>
            </div>
            <div className="additionalDetails-detailItm">
              <span className="additionalDetails-itmkey">Year:</span>
              <span className="additionalDetails-itmVal"> 2004</span>
            </div>
            <div className="additionalDetails-detailItm">
              <span className="additionalDetails-itmkey">km:</span>
              <span className="additionalDetails-itmVal"> 10456686</span>
            </div>
            <div className="additionalDetails-detailItm">
              <span className="additionalDetails-itmkey">Enginecode:</span>
              <span className="additionalDetails-itmVal"> Benzin</span>
            </div>
            <div className="additionalDetails-detailItm">
              <span className="additionalDetails-itmkey">Country:</span>
              <span className="additionalDetails-itmVal"> SA</span>
            </div>
          </div>
          <div className="additionalDetailsColumn">
            <h4 className="additionalDetailsheading">Other</h4>
            <div className="additionalDetails-detailItm">
              <span className="additionalDetails-itmkey">
                Constructed from:
              </span>
              <span className="additionalDetails-itmVal"> 2002</span>
            </div>
            <div className="additionalDetails-detailItm">
              <span className="additionalDetails-itmkey">Constructed to:</span>
              <span className="additionalDetails-itmVal"> </span>
            </div>
            <div className="additionalDetails-detailItm">
              <span className="additionalDetails-itmkey">Motortype:</span>
              <span className="additionalDetails-itmVal"> Petrol Engine</span>
            </div>
            <div className="additionalDetails-detailItm">
              <span className="additionalDetails-itmkey">Gearbox type:</span>
              <span className="additionalDetails-itmVal">
                Schaltgetriebe 5-Gang
              </span>
            </div>
            <div className="additionalDetails-detailItm">
              <span className="additionalDetails-itmkey">Gearboxcode:</span>
              <span className="additionalDetails-itmVal"> </span>
            </div>
            <div className="additionalDetails-detailItm">
              <span className="additionalDetails-itmkey">VIN-number:</span>
              <span className="additionalDetails-itmVal">
                KLASF48714B175575
              </span>
            </div>
            <div className="additionalDetails-detailItm">
              <span className="additionalDetails-itmkey">
                Construction type:
              </span>
              <span className="additionalDetails-itmVal"> Hatchback</span>
            </div>
          </div>
        </div>
        <div className="additionalDetails-row">
          <div className="additionalDetailsColumn" style={{alignItems:"center"}}>
            <h3
              className="additionalDetailsheading"
              style={{ marginBottom: "1rem" }}
            >
              This spare part perhaps also fits these cars
            </h3>
            <div className="additionalDetails-row" >
              <BasicTable />
            </div>
          </div>
        </div>
        <div className="additionalDetailsColumn">
          <div className="additionalDetails-row">
            <h3 className="additionalDetailsheading">
              Similar spare parts that match your search
            </h3>
          </div>
          <div className="additionalDetails-row">
            <div className="additionalDetailsColumn">
              <CardForSparePart />
            </div>
            <div className="additionalDetailsColumn">
              <CardForSparePart />
            </div>
            <div className="additionalDetailsColumn">
              <CardForSparePart />
            </div>
          </div>
        </div>
        <div className="additionalDetailsColumn" style={{alignItems:"center"}}>
            <span
              className="spanlink"
             
            >
             See all spare parts categories for Audi A4 (8D2, B5) 
            </span>
            
        </div>
      </div>
       
    </div>
  );
};

export default AdditionalDetails;
