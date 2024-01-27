import { NavLink } from "react-router-dom";
import "../assets/css/BurgerMenu.css";

const BurgerMenu = () => {
  return (
    <nav>
      <div className="navbar">
        <div className="container nav-container">
          <input className="checkbox" type="checkbox" id="nav-toggle" />
          <label htmlFor="nav-toggle" className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </label>
          <div className="menu-items">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">about</NavLink>
            </li>
            <li>
              <NavLink to="/blogs">blogs</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio">portfolio</NavLink>
            </li>
            <li>
              <NavLink to="/contact">contact</NavLink>
            </li>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default BurgerMenu;
