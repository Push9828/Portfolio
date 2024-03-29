import React, { useState, useEffect } from "react";
import Logo from "../../assets/img/logo.svg";
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import Socials from "./Socials";
import { Link } from "react-scroll";

const Header = () => {
  const [background, setBackground] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBackground(true) : setBackground(false);
    });
  }, []);

  return (
    <header
      className={`${
        background ? "bg-tertiary h-20" : "h-24"
      } flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        <Link
          to="home"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
          offset={-50}
          className="transition-all duration-300 cursor-pointer"
        >
          <img src={Logo} alt="Logo" />
        </Link>

        <div className="hidden lg:block">
          <Nav />
        </div>
        <div className="hidden lg:block">
          <Socials />
        </div>
        <div className="lg:hidden">
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
