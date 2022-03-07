import { Button, Grid, TextField, Typography as Font } from "@mui/material";
import Link from "next/link";
import React from "react";
import { primaryColor } from "../styles/themes/defaulttheme";
const SignUp = ({
  handleSubmit = () => {},
  handleChange = () => {},
  values = {},
  terms,
}) => {
  return (
    <Grid
      container
      component="form"
      onSubmit={handleSubmit}
      direction="column"
      spacing={5}
    >
      <Grid item>
        <TextField
          name="name"
          label="Full Name"
          variant="standard"
          type="text"
          fullWidth
          onChange={handleChange}
          value={values.name}
        />
      </Grid>
      <Grid item>
        <TextField
          name="username"
          label="User Name"
          variant="standard"
          type="text"
          fullWidth
          onChange={handleChange}
          value={values.username}
        />
      </Grid>
      <Grid item>
        <TextField
          name="email"
          label="Email"
          variant="standard"
          type="email"
          fullWidth
          onChange={handleChange}
          value={values.email}
        />
      </Grid>
      <Grid item>
        <TextField
          name="phone"
          label="Phone Number"
          variant="standard"
          type="tel"
          fullWidth
          onChange={handleChange}
          value={values.phone}
        />
      </Grid>
      <Grid item>
        <TextField
          name="pass"
          label="Password"
          variant="standard"
          type="password"
          fullWidth
          onChange={handleChange}
          value={values.pass}
        />
      </Grid>
      <Grid item>
        <TextField
          name="confirmPass"
          label="Confirm Password"
          variant="standard"
          type="password"
          fullWidth
          onChange={handleChange}
          value={values.confirmPass}
        />
      </Grid>
      <Grid item>
        <Button variant="rounded" type="submit" fullWidth>
          Sign Up
        </Button>
      </Grid>
      {terms && (
        <Grid item>
          <Font variant="body1" align="center">
            By Signing up you accept all of our
            <br />
            <Link href="/terms" passHref>
              <Font variant="body1" color={primaryColor} component="a">
                terms and conditions
              </Font>
            </Link>
          </Font>
        </Grid>
      )}
    </Grid>
  );
};

export default SignUp;
