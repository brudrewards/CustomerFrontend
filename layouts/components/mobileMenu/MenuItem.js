import { Grid, Typography as Font } from "@mui/material";
import Link from "next/link";
import React from "react";

const MenuItem = ({ icon, href, children, xs, ...props }) => {
  return (
    <Grid item className="MenuItem" xs={12}>
      {href ? (
        <Link href={href} {...props} passHref>
          <Grid container alignItems="start" component="a" wrap="nowrap">
            {icon && (
              <Grid item className="Icon">
                {icon}
              </Grid>
            )}
            <Grid item>
              <Font variant="body1" noWrap>
                {children}
              </Font>
            </Grid>
          </Grid>
        </Link>
      ) : (
        <Grid
          container
          item
          alignItems="start"
          component="a"
          wrap="nowrap"
          xs={12}
          {...props}
        >
          {icon && (
            <Grid item className="Icon">
              {icon}
            </Grid>
          )}

          <Grid item>{children}</Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default MenuItem;
