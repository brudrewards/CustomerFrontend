import anime from "animejs";

export const aniMobileMenu = ({ open: [open, setOpen] }) => {
  const width = open ? ["100%", "0%"] : ["0%", "100%"];
  const animateMenu = anime({
    targets: ".MenuItems",
    width: width,
    duration: 300,
    easing: "linear",
  });
  const body = document.querySelector("body");
  if (!open) body.setAttribute("style", "overflow: hidden");
  else body.removeAttribute("style");
  animateMenu.play();
  setOpen(!open);
};
