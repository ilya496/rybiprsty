import BandCarousel from "../components/BandCarousel";

function HomePage() {
  return (
    <div className="container">
      <section className="section">
        <h2 className="section__title">Členové kapely</h2>
        <BandCarousel />
      </section>
    </div>
  );
}

export default HomePage;
