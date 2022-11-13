import React from "react";
import "./SpareParts.scss";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { items } from "./../../data";

const SpareParts = () => {
  console.log(items);

  return (
    <div className="all-parts-container">
      <h4 className="parts-heading">USED SPARE PARTS</h4>
      <Box sx={{ width: "100%" }}>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          padding="1rem"
        >
          {items.map((itm) => {
            return (
              <Grid item xs={3}>
                <div className="item-card ">
                  <h6 className="card-heading">{itm}</h6>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
};

export default SpareParts;
