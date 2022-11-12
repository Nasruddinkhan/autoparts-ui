import React from "react";
import "./SpareParts.scss";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
const SpareParts = () => {
  for (let index = 1; index <= 100; index++) {}
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
          <Grid item xs={3}>
            <div className="item-card ">
              <h6 className="card-heading">USED SPARE PARTSA B S - Eletronic Box (1992)</h6>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className="item-card ">
              <h6 className="card-heading">USED SPARE PARTSA B S - Eletronic Box (1992)</h6>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className="item-card ">
              <h6 className="card-heading">USED SPARE PARTSA B S - Eletronic Box (1992)</h6>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className="item-card ">
              <h6 className="card-heading">USED SPARE PARTSA B S - Eletronic Box (1992)</h6>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className="item-card ">
              <h6 className="card-heading">USED SPARE PARTSA B S - Eletronic Box (1992)</h6>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default SpareParts;
