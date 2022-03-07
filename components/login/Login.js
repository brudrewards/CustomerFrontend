import { Button, Grid, TextField, Typography as Font } from "@mui/material";
import Link from "next/link";
import React from "react";
import { primaryColor } from "../../styles/themes/defaulttheme";

const Login = ({
  onSubmit = () => {},
  handleChange = () => {},
  resetPassword,
}) => {
  return (
    <Grid
      container
      component="form"
      onSubmit={onSubmit}
      direction="column"
      spacing={2}
    >
      <Grid item>
        <TextField
          name="email"
          label="Email"
          type="email"
          onChange={handleChange}
          variant="standard"
          fullWidth
        />
      </Grid>
      <Grid item>
        <TextField
          name="password"
          label="Password"
          type="password"
          variant="standard"
          onChange={handleChange}
          fullWidth
        />
      </Grid>
      <Grid item>
        <Button variant="rounded" type="submit" fullWidth>
          <Font variant="button">Submit</Font>
        </Button>
      </Grid>
      {resetPassword && (
        <Grid item>
          <Font variant="body1">
            Forgot password?{" "}
            <Link href="/reset-password" passHref>
              <Font variant="body1" color={primaryColor} component="a">
                Reset Password
              </Font>
            </Link>
          </Font>
        </Grid>
      )}
    </Grid>
  );
};

export default Login;
