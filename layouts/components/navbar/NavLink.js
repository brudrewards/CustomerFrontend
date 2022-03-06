import Link from "next/link";
import React from "react";

const NavLink = ({ children, to = "/" }) => {
  return (
    <div className="NavLink">
      <Link href={to}>{children}</Link>
    </div>
  );
};

export default NavLink;
