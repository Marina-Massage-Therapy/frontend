import React, { useState } from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import "../assets/css/SwitchLang.css";

const SwitchLang = ({ onChangeLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currLang, setCurrLang] = useState("English");

  const onToggleLang = (lng) => {
    onChangeLang(lng);
    setCurrLang(lng);
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="language-switch-menu">
      <div
        className="language-switch-button"
        onClick={toggleMenu}
      >
        <span>{currLang}</span>
        <ChevronDownIcon />
      </div>

      {isOpen && (
        <div className={`language-switch-menu ${isOpen ? "show" : ""}`}>
          <div onClick={() => onToggleLang("Hebrew")}>Hebrew</div>
          <div onClick={() => onToggleLang("English")}>English</div>
          <div onClick={() => onToggleLang("Russian")}>Russian</div>
        </div>
      )}
    </div>
  );
};

export default SwitchLang;
