import { Grid } from "@mui/material";
import React from "react";

const MenuItems = ({ children, ...props }) => {
  return (
    <Grid container direction="column" className="MenuItems">
      {children.map((i, index) => (
        <Grid item key={index}>
          {i}
        </Grid>
      ))}
    </Grid>
  );
};

export default MenuItems;
