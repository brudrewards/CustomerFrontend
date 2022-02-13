import { useContext, useState, useEffect } from "react";
import { DataContext } from "../store/GlobalState";
import Navbar from "../components/Navbar";
const Layout = ({ children }) => {
  const { state, dispatch } = useContext(DataContext);
  const { navbar } = state;

  console.log("navbar", navbar);
  return (
    <div>
      {navbar && <Navbar />}
      {children}
    </div>
  );
};

export default Layout;
