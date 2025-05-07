import { Link } from "react-router-dom";

const events = [
  {
    name: "16.4.2025 - Arabský Páteček",
    slug: "patecek-16-4-2025",
    image: "/images/patecek_3/1.jpg",
  },
  {
    name: "28.2.2025 - Arabský Páteček",
    slug: "patecek-28-2-2025",
    image: "/images/patecek_2/1.jpg",
  },
  {
    name: "10.1.2025 - Arabský Páteček",
    slug: "patecek-10-1-2025",
    image: "/images/patecek_1/1.jpg",
  },
];

function GalleryPage() {
  return (
    <div className="container gallery-container">
      <section className="section">
        <h1 className="gallery-title">Galerie Událostí</h1>
        <div className="event-grid">
          {events.map(({ name, slug, image }) => (
            <Link to={`/gallery/${slug}`} key={slug} className="event-card">
              <img src={image} alt={name} className="event-card__img" />
              <div className="event-card__info">
                <h3>{name}</h3>
                <button>Zobrazit</button>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default GalleryPage;
