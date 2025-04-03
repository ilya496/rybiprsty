import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="container header__container">
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <Link className="nav__link" to="/zadani">
                Zadání
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to="/navrh">
                Návrh řešení
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to="/data">
                Trénovací a testovací data
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to="/experimenty">
                Experimenty
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to="/vysledky">
                Zhodnocení výsledků
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to="/reference">
                Seznam referencí
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
