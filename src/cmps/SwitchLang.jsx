import React, { useState } from "react";
import IlSvg from "../assets/icons/IL.svg";
import EnSvg from "../assets/icons/EN.svg";
import RuSvg from "../assets/icons/RU.svg";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Flex,
} from "@chakra-ui/react";

const SwitchLang = ({ onChangeLang, isHeader }) => {
  const [currFlag, setCurrFlag] = useState(EnSvg);

  const onToggleLang = (lng) => {
    onChangeLang(lng);
    onMatchFlag(lng);
  };

  const onMatchFlag = (lng) => {
    if (lng === "en") setCurrFlag(EnSvg);
    else if (lng === "he") setCurrFlag(IlSvg);
    else setCurrFlag(RuSvg);
  };

  return (
    <Menu _hover={{ bg: "transparent" }}>
      <MenuButton
        display={{ base: "flex", md: isHeader ? "flex" : "none" }}
        as={Button}
        rightIcon={<ChevronDownIcon />}
        bg="transparent"
        _hover={{ bg: "transparent" }}
        _active={{ bg: "transparent" }}
      >
        <img
          src={currFlag}
          alt="Flag"
        />
      </MenuButton>

      <MenuList
        as={Flex}
        direction="column"
        align="center"
        zIndex="2"
      >
        <MenuItem onClick={() => onToggleLang("he")}>
          <img
            src={IlSvg}
            alt="Hebrew Flag"
          />
        </MenuItem>
        <MenuItem onClick={() => onToggleLang("en")}>
          <img
            src={EnSvg}
            alt="English Flag"
          />
        </MenuItem>
        <MenuItem onClick={() => onToggleLang("ru")}>
          <img
            src={RuSvg}
            alt="Russian Flag"
          />
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SwitchLang;
