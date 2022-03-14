import {
  Edit,
  EditAttributesOutlined,
  EditOutlined,
} from "@mui/icons-material";
import { Avatar, Grid, Typography as Font } from "@mui/material";
import Link from "next/link";
import React from "react";
const Customer = ({ customer: { url, name } }) => {
  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      wrap="nowrap"
      width="100%"
      className="MenuItem"
    >
      <Grid item>
        <Link href="/profile" passHref>
          <Grid container alignItems="center" wrap="nowrap" component="a">
            <Grid item className="Avatar">
              {url ? (
                <Avatar src={url} />
              ) : (
                <Avatar>{name.substring(0, 2)}</Avatar>
              )}
            </Grid>
            <Grid item>
              <Font variant="body">{name}</Font>
            </Grid>
          </Grid>
        </Link>
      </Grid>
      <Link href="/profile/edit" passHref>
        <Grid item component="a">
          <EditOutlined />
        </Grid>
      </Link>
    </Grid>
  );
};

export default Customer;
