function AboutPage() {
  return (
    <section className="hero">
      <div className="container hero__container">
        <h1 className="hero__title">O nás</h1>
        <p className="hero__text">
          Vítejete na oficiálních stránkách Rybích Prstů! Jsme skupina nadšenců,
          kteří se věnují pořádání jedinečných akcí a zážitků. Naším cílem je
          spojit lidi a vytvořit nezapomenutelné vzpomínky. Naše akce zahrnují
          různé hudební žánry, od rocku po punk, a snažíme se nabídnout něco pro
          každého milovníka hudby.
        </p>
        <p className="hero__text">
          Spoiler Alert: Zachvíli se můžete těšit na studijní nahrávky naších
          skladeb na všech hlavních streamovacích platformách!
        </p>
        <div className="hero__cta">
          <a
            href="https://instagram.com/rybiprsty_official"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
          >
            Navštivte náš Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
