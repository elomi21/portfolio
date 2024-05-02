import { NavLink } from "react-router-dom";
import Hamburger from "../hamburger";
// import Logoname from "../../assets/logo/logo-name.svg";
import { useState } from "react";

function Header() {
  const [HamburgerOpen, setHamburgerOpen] = useState(false);
  const toggleHamburger = () => {
    setHamburgerOpen(!HamburgerOpen);
  };
  return (
    <header>
      <nav className={HamburgerOpen ? "expanded" : ""}>
        <div onClick={toggleHamburger}>{<Hamburger />}</div>
        <div
          className={`nav-link ${HamburgerOpen ? "nav-link-visibility" : ""}`}
        >
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="/Projets">Projets</NavLink>
          <NavLink to="/Competences">Compétences</NavLink>
          <NavLink to="/Contact">Contact</NavLink>
        </div>
      </nav>
    </header>
  );
}
export default Header;
