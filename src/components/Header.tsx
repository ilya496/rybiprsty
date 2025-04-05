import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `nav__link ${isActive ? "nav__link--active" : ""}`;

  return (
    <header className="header">
      <div className="container header__container">
        <Logo />

        <button
          className="nav__toggle"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <LuX size={24} /> : <LuMenu size={24} />}
        </button>

        <nav className={`nav ${isMenuOpen ? "nav--open" : ""}`}>
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink
                className={linkClass}
                to="/"
                onClick={() => setIsMenuOpen(false)}
              >
                Domů
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                className={linkClass}
                to="/about"
                onClick={() => setIsMenuOpen(false)}
              >
                O nás
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                className={linkClass}
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontakt
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                className={linkClass}
                to="/upcoming"
                onClick={() => setIsMenuOpen(false)}
              >
                Nadcházející akce
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                className={linkClass}
                to="/gallery"
                onClick={() => setIsMenuOpen(false)}
              >
                Galerie
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                className={linkClass}
                to="/blog"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
