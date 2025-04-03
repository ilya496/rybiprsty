import { Link } from "react-router-dom";
import Logo from "./Logo";

function Header() {
  return (
    <header className="header">
      <div className="container header__container">
        <Logo />
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <Link className="nav__link" to="/">
                Domů
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to="/about">
                O nás
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to="/contact">
                Kontakt
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to="/upcoming">
                Nadcházející akce
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to="/gallery">
                Galerie
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to="/blog">
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
