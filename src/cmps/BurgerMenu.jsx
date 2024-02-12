// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import "../assets/css/BurgerMenu.css";

// const BurgerMenu = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleNavLinkClick = () => {
//     setIsOpen(false); // Close the menu when a NavLink is clicked
//   };

//   return (
//     <nav>
//       <div className="navbar">
//         <div className="container nav-container">
//           <input
//             className="checkbox"
//             type="checkbox"
//             id="nav-toggle"
//             checked={isOpen}
//             onChange={toggleMenu}
//           />
//           <label
//             htmlFor="nav-toggle"
//             className="hamburger-lines"
//           >
//             <span className="line line1"></span>
//             <span className="line line2"></span>
//             <span className="line line3"></span>
//           </label>
//           <div className={`menu-items ${isOpen ? "open" : ""}`}>
//             <li>
//               <NavLink
//                 to="/"
//                 onClick={handleNavLinkClick}
//               >
//                 Home
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/about"
//                 onClick={handleNavLinkClick}
//               >
//                 About
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/Massages"
//                 onClick={handleNavLinkClick}
//               >
//                 Massages
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/testimonials"
//                 onClick={handleNavLinkClick}
//               >
//                 Testimonials
//               </NavLink>
//             </li>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default BurgerMenu;
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
