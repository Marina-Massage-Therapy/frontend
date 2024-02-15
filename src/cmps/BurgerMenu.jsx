import React, { useState } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { t } from "i18next";
import { NavLink } from "react-router-dom";
import "../assets/css/BurgerMenu.css";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const pages = [
    {
      titleKey: "cmps.header.home",
      path: "/home",
    },
    {
      titleKey: "cmps.header.about",
      path: "/about",
    },
    {
      titleKey: "cmps.header.massages",
      path: "/massages",
    },
    {
      titleKey: "cmps.header.testimonials",
      path: "/testimonials",
    },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="burger-menu">
      <HamburgerIcon
        w="20px"
        h="20px"
        onClick={toggleMenu}
      />

      <div
        className="menu-options"
        style={{ display: isOpen ? "block" : "none" }}
      >
        {pages.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={handleNavLinkClick}
          >
            {t(item.titleKey)}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default BurgerMenu;
