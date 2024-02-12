// import React, { useState } from "react";
// import IlSvg from "../assets/icons/IL.svg";
// import EnSvg from "../assets/icons/EN.svg";
// import RuSvg from "../assets/icons/RU.svg";
// import { ChevronDownIcon } from "@chakra-ui/icons";
// import "../assets/css/SwitchLang.css";

// const SwitchLang = ({ onChangeLang }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [currFlag, setCurrFlag] = useState(EnSvg);

//   const onToggleLang = (lng) => {
//     onChangeLang(lng);
//     onMatchFlag(lng);
//     setIsOpen(false);
//   };

//   const onMatchFlag = (lng) => {
//     if (lng === "en") setCurrFlag(EnSvg);
//     else if (lng === "he") setCurrFlag(IlSvg);
//     else setCurrFlag(RuSvg);
//   };

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="language-switch-menu">
//       <div
//         className="language-switch-button"
//         onClick={toggleMenu}
//       >
//         <img
//           src={currFlag}
//           alt="Flag"
//         />
//         <ChevronDownIcon />
//       </div>

//       {isOpen && (
//         <div className={`language-switch-menu ${isOpen ? "show" : ""}`}>
//           <div onClick={() => onToggleLang("he")}>
//             <img
//               src={IlSvg}
//               alt="Hebrew Flag"
//             />
//           </div>
//           <div onClick={() => onToggleLang("en")}>
//             <img
//               src={EnSvg}
//               alt="English Flag"
//             />
//           </div>
//           <div onClick={() => onToggleLang("ru")}>
//             <img
//               src={RuSvg}
//               alt="Russian Flag"
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SwitchLang;

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
