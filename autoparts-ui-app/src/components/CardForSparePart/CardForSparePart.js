import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
const CardForSparePart = () => {
  return (
    <Card sx={{ maxWidth: 345, padding: "1rem", textAlign: "center" }}>
      <CardMedia
        component="img"
        height="140"
        image="https://img.autoparts24.eu/images/original/B/0017/3390612_0.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          AUDI - A4 (8D2, B5)
        </Typography>
          <Typography>A b s - eletronic box</Typography>
          <Typography>296,33 EUR</Typography> 
      </CardContent>
    </Card>
  );
};

export default CardForSparePart;
