import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import MenuItem from "./MenuItem";
import LogoSrc from "../../../public/logo-white.png";
import MenuHeader from "./MenuHeader";
import MenuItems from "./MenuItems";
/*********
 * icons imports
 *********/
import Star from "@mui/icons-material/StarBorderOutlined";
import Card from "@mui/icons-material/CreditCardOutlined";
import Restraunt from "@mui/icons-material/RestaurantOutlined";
import Paper from "@mui/icons-material/FeedOutlined";
import Info from "@mui/icons-material/InfoOutlined";
import Power from "@mui/icons-material/PowerSettingsNewOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import anime from "animejs";

const MobileMenu = ({ customer }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    const width = open ? ["100%", "0%"] : ["0%", "100%"];
    const animateMenu = anime({
      targets: ".MenuItems",
      width: width,
      duration: 300,
      easing: "linear",
    });
    animateMenu.play();
    setOpen(!open);
  };
  return (
    <Grid
      container
      component="aside"
      direction={"column"}
      className="MobileMenu"
    >
      <MenuHeader>
        <MenuItem href="/" icon={<Image src={LogoSrc} alt="Brud Logo" />} />
        <MenuItem
          icon={open ? <MenuOpenIcon /> : <MenuIcon />}
          onClick={handleOpen}
        />
      </MenuHeader>
      <MenuItems>
        <MenuItem href="/rewards" icon={<Star />}>
          Reward Points
        </MenuItem>
        <MenuItem href="/payments" icon={<Card />}>
          Payments
        </MenuItem>
        <MenuItem href="/orders" icon={<Restraunt />}>
          My Orders
        </MenuItem>
        <MenuItem href="/about" icon={<Info />}>
          About Brud
        </MenuItem>
        <MenuItem href="/terms" icon={<Paper />}>
          Terms & Policy
        </MenuItem>
        <MenuItem icon={<Power />}>Logout</MenuItem>
      </MenuItems>
    </Grid>
  );
};

export default MobileMenu;
