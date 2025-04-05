import { useState } from "react";
import { LuInstagram } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";

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
    img: "/images/simon_ilja.jpg",
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
  const [currentMembers, setCurrentMembers] = useState(members);

  const nextSlide = () => {
    setCurrentMembers((prev) => [...prev.slice(1), prev[0]]);
  };

  const prevSlide = () => {
    setCurrentMembers((prev) => [prev[prev.length - 1], ...prev.slice(0, -1)]);
  };

  return (
    <div className="container carousel-container">
      <button className="carousel-btn left" onClick={prevSlide}>
        &#10094;
      </button>
      <div className="carousel-wrapper">
        <AnimatePresence mode="popLayout">
          {currentMembers.slice(0, 3).map((member) => (
            <motion.div
              key={member.name}
              className="member"
              initial={{ opacity: 0, x: 0 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 0 }}
              transition={{ duration: 0.5 }}
            >
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
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <button className="carousel-btn right" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
}

export default BandCarousel;
