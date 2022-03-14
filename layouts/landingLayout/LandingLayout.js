import Head from "next/head";
import React from "react";
import Header from "./components/Header";

const LandingLayout = ({ children }) => {
  return (
    <div className="LandingLayout">
      <Head>
        <title>Brud Rewards</title>
      </Head>
      <Header />
      {children}
    </div>
  );
};

export default LandingLayout;
