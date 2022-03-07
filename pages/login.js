import { useState } from "react";
import { useRouter } from "next/router";
import MainLayout from "../layouts/mainLayout/MainLayout";
import { Grid, Typography as Font } from "@mui/material";
import { primaryColor } from "../styles/themes/defaulttheme";
import LoginForm from "../components/Login";
const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    /***************************************
     * add logic hear when backend is live
     ***************************************/
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email": {
        setEmail(value);
        break;
      }
      case "password": {
        setPassword(value);
        break;
      }
      default: {
        console.log("incorrect name");
      }
    }
  };
  const values = {
    email,
    password,
  };
  return (
    <MainLayout title="Login">
      <Grid container direction="column" alignContent="center" spacing={3}>
        <Grid item></Grid>
        <Grid item>
          <Font variant="h3" component="h1">
            Login your account
          </Font>
          <Font variant="subtitle" color={primaryColor}>
            Fill in you credentials and start ordering
          </Font>
        </Grid>
        <Grid item>
          <LoginForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            values={values}
            resetPassword
          />
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default Login;
