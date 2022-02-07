import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav
      id="navbar"
      className="navbar navbar-expand-sm navbar-light bg-light position"
    >
      <Link href="/">
        <a className="navbar-brand">Brup Rewards</a>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link href="/home">
              <a className="nav-link active" aria-current="page">
                Home
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/cafe">
              <a className="nav-link active" aria-current="page">
                Cafe
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/earning">
              <a className="nav-link active" aria-current="page">
                Earnings
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/orders">
              <a className="nav-link active" aria-current="page">
                Orders
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/menu">
              <a className="nav-link active" aria-current="page">
                Menu
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="#logout">
              <a className="nav-link active" aria-current="page">
                Sign Out
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
