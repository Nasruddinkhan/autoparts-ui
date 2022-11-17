import { Box, Grid } from "@mui/material";
import React, { Fragment } from "react";
import Item from "../components/Items/Item";
import SearchItem from "../components/SearchItem/SearchItem";
import "./PartItems.scss";
const PartItems = () => {
  return (
    <Fragment>
      <div className="partitems">
        <div className="searchItem">
          <SearchItem />
        </div>
        <div className="cardItem">
          <Box sx={{ width: "100%" }}>
            <Grid container>
              <Grid>
                <Item />
              </Grid>
              <Grid>
                <Item />
              </Grid>
              <Grid>
                <Item />
              </Grid> <Grid>
                <Item />
              </Grid> <Grid>
                <Item />
              </Grid> <Grid>
                <Item />
              </Grid> <Grid>
                <Item />
              </Grid> <Grid>
                <Item />
              </Grid> <Grid>
                <Item />
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
    </Fragment>
  );
};

export default PartItems;
