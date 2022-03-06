import { Container } from "@mui/material";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <nav>
      <Container maxWidth="xl">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/cafe">Cafe</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/login">Login</NavLink>
      </Container>
    </nav>
  );
};

export default Navbar;
