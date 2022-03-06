import { Link } from "@mui/material";
import Image from "next/image";
import React from "react";
import RewardImg from "../../../public/assets/rewards_logo_inverted.jpg";
// import { Example } from "./Example";
// import SignUpButton from "./SignUpButton";

function Header() {
  return (
    <header className="header">
      <div className="header__left">
        <Link className="header_logo" href="/" >
          <Image src={RewardImg} alt="Brud_Rewards_logo" height={50} width={94}/>
        </Link>
        <Link href="/about_brud" className="header__link">
          About Brud
        </Link>
        <Link href="/cafe_partners" className="header__link">
          Cafe Partners
        </Link>
        <Link href="/download_app" className="header__link">
          Download App
        </Link>
      </div>
      <div className="header__right">
        <></>
        <></>
      </div>
      {/* 
        <Example />
        <>
          <Link href="/account/create">
            <SignUpButton />
          </Link>
        </>
       */}
    </header>
  );
}

export default Header;
