import React from "react";
import { NavLink } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

const Header = ({ onChangeLang }) => {
  return (
    <Flex
      display={{ base: "none", md: "flex" }}
      position="sticky"
      top="0px"
      as="nav"
      align="center"
      justify="space-around"
      fontSize="xl"
      fontFamily="Poppins, sans-serif"
      wrap="wrap"
      padding={6}
      zIndex="100"
      w="100%"
    >
      <NavLink to={"/home"}>Home</NavLink>
      <NavLink to={"/about"}>About</NavLink>
      <NavLink to={"/massages"}>Massages</NavLink>
      <NavLink to={"/testimonials"}>Testimonials</NavLink>
      <NavLink to={"/contact"}>Contact</NavLink>
    </Flex>
  );
};

export default Header;
