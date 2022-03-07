import { Grid, Typography as Font } from "@mui/material";
import React, { useState } from "react";
import MainLayout from "../layouts/mainLayout/MainLayout";
import SignupForm from "../components/SignUp";
import { primaryColor } from "../styles/themes/defaulttheme";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    /***************************************
     * add logic hear when backend is live
     ***************************************/
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name": {
        setName(value);
        break;
      }
      case "email": {
        setEmail(value);
        break;
      }
      case "username": {
        setUsername(value);
        break;
      }
      case "pass": {
        setPass(value);
        break;
      }
      case "confirmPass": {
        setConfirmPass(value);
        break;
      }
      case "phone": {
        setPhone(value);
        break;
      }
      default: {
        console.log("incorrect name");
      }
    }
  };
  const values = { name, username, email, phone, pass, confirmPass };
  return (
    <MainLayout title="SignUp">
      <Grid container direction="column" alignContent="center" spacing={3}>
        <Grid item></Grid>
        <Grid item>
          <Font variant="h3" component="h1">
            Create an account
          </Font>
          <Font variant="subtitle" color={primaryColor}>
            We need a little information about you
          </Font>
        </Grid>
        <Grid item>
          <SignupForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            values={values}
            terms
          />
        </Grid>
        <Grid item></Grid>
      </Grid>
    </MainLayout>
  );
};

export default Signup;
