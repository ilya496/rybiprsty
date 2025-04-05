import { NavLink } from "react-router-dom";
import Logo from "./Logo";

function Header() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `nav__link ${isActive ? "nav__link--active" : ""}`;

  return (
    <header className="header">
      <div className="container header__container">
        <Logo />
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink className={linkClass} to="/">
                Domů
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className={linkClass} to="/about">
                O nás
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className={linkClass} to="/contact">
                Kontakt
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className={linkClass} to="/upcoming">
                Nadcházející akce
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className={linkClass} to="/gallery">
                Galerie
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className={linkClass} to="/blog">
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
