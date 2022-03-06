import { Grid, Typography as Font } from "@mui/material";
import Link from "next/link";
import React from "react";

const MenuItem = ({ icon, href, children, ...props }) => {
  return (
    <Grid item className="MenuItem">
      {href ? (
        <Link href={href} {...props} passHref>
          <Grid container alignItems="start" component="a" wrap="nowrap">
            <Grid item className="Icon">
              {icon}
            </Grid>
            <Grid item minWidth={"150px"}>
              <Font variant="body1">{children}</Font>
            </Grid>
          </Grid>
        </Link>
      ) : (
        <Grid
          container
          alignItems="start"
          component="a"
          wrap="nowrap"
          {...props}
        >
          <Grid item className="Icon">
            {icon}
          </Grid>
          <Grid item>{children}</Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default MenuItem;
