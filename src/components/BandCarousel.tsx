import { LuInstagram } from "react-icons/lu";

const members = [
  {
    name: "Viktor Jakovec",
    role: "Zpěvák & Lead kytarista",
    img: "/images/viktor_zarovka.jpg",
    insta: "https://www.instagram.com/viktorjakove",
  },
  {
    name: "Šimon Horník",
    role: "Rythm kytarista",
    img: "/images/simon_travnik.jpg",
    insta: "https://www.instagram.com/_hornix_",
  },
  {
    name: "Ilja Novák",
    role: "Baskytarista",
    img: "/images/ilja_nese_pepu.jpg",
    insta: "https://www.instagram.com/ily_tracer_",
  },
  {
    name: "Jakub Vejražka",
    role: "Bubeník",
    img: "/images/kuba_simon_metro.jpg",
    insta: "https://www.instagram.com/kubavejrazka",
  },
];

function BandCarousel() {
  return (
    <div className="carousel">
      {members.map((member) => (
        <div key={member.name} className="member">
          <img className="member__img" src={member.img} alt={member.name} />
          <h3 className="member__name">{member.name}</h3>
          <p className="member__role">{member.role}</p>
          <div className="member__social">
            <a
              href={member.insta}
              className="member__social__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LuInstagram size={24} /> Navštívit profil
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BandCarousel;
