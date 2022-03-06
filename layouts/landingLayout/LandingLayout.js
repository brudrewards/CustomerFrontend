import React from "react";
import Header from "./components/Header";

const LandingLayout = ({ children }) => {
  return (
    <div className="LandingLayout">
      <Header />
      {children}
    </div>
  );
};

export default LandingLayout;
