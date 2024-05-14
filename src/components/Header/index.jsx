import { NavLink } from "react-router-dom";
import Hamburger from "../hamburger";
import { useState } from "react";

function Header() {
  const [HamburgerOpen, setHamburgerOpen] = useState(false);
  const toggleHamburger = () => {
    setHamburgerOpen(!HamburgerOpen);
  };
  const closeMenu = () => {
    setHamburgerOpen(false);
  };
  return (
    <header>
      <nav className={HamburgerOpen ? "expanded" : ""}>
        <div onClick={toggleHamburger}>{<Hamburger />}</div>
        <div
          className={`nav-link ${HamburgerOpen ? "nav-link-visibility" : ""}`}
        >
          <NavLink to="/" onClick={closeMenu}>
            Accueil
          </NavLink>
          <NavLink to="/Projets" onClick={closeMenu}>
            Projets
          </NavLink>
          <NavLink to="/Competences" onClick={closeMenu}>
            Compétences
          </NavLink>
          <NavLink to="/Contact" onClick={closeMenu}>
            Contact
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
export default Header;
