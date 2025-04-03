import { LuInstagram } from "react-icons/lu";

function BandCarousel() {
  return (
    <div className="carousel-container">
      <ul className="carousel">
        <li className="member">
          <img
            className="member__img"
            src="/images/viktor_zarovka.jpg"
            alt="Viktor Jakovec"
          />
          <h3 className="member__name">Viktor Jakovec</h3>
          <p className="member__role">Zpěvák & Lead kytarista</p>
          <div className="member__social">
            <a
              href="https://www.instagram.com/viktorjakove"
              className="member__social__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LuInstagram size={24} /> Navštívit profil
            </a>
          </div>
        </li>
        <li className="member">
          <img
            className="member__img"
            src="/images/simon_travnik.jpg"
            alt="Šimon Horník"
          />
          <h3 className="member__name">Šimon Horník</h3>
          <p className="member__role">Rythm kytarista</p>
          <div className="member__social">
            <a
              href="https://www.instagram.com/_hornix_"
              className="member__social__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LuInstagram size={24} /> Navštívit profil
            </a>
          </div>
        </li>
        <li className="member">
          <img
            className="member__img"
            src="/images/simon_ilja.jpg"
            alt="Ilja Novák"
          />
          <h3 className="member__name">Ilja Novák</h3>
          <p className="member__role">Baskytarista</p>
          <div className="member__social">
            <a
              href="https://www.instagram.com/ily_tracer_"
              className="member__social__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LuInstagram size={24} /> Navštívit profil
            </a>
          </div>
        </li>
        <li className="member">
          <img
            className="member__img"
            src="/images/kuba_simon_metro.jpg"
            alt="Jakub Vejražka"
          />
          <h3 className="member__name">Jakub Vejražka</h3>
          <p className="member__role">Bubeník</p>
          <div className="member__social">
            <a
              href="https://www.instagram.com/kubavejrazka"
              className="member__social__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LuInstagram size={24} /> Navštívit profil
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default BandCarousel;
