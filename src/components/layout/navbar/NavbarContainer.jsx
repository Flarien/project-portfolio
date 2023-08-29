import { useEffect, useState } from "react";
import { NavbarPresentacional } from "./NavbarPresentacional";


export const NavbarContainer = () => {

  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect (() => {
    const onScroll = () => {
      if(window.scrollY > 50){
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value)
  }

  return (
    <NavbarPresentacional
      scrolled={scrolled}
      activeLink={activeLink}
      onUpdateActiveLink={onUpdateActiveLink}
    />
  );
};

