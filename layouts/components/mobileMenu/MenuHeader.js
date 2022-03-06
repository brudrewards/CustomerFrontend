import { Grid } from "@mui/material";
import React from "react";

const MenuHeader = ({ children, ...props }) => {
  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      className="MenuHeader"
      direction="row"
    >
      {children.map((i, index) => (
        <Grid item key={index}>
          {i}
        </Grid>
      ))}
    </Grid>
  );
};

export default MenuHeader;
