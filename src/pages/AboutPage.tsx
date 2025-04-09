function AboutPage() {
  return (
    <section className="hero">
      <div className="container hero__container">
        <h1 className="hero__title">About Us</h1>
        <p className="hero__text">
          Welcome to our website! We are dedicated to providing you with the
          best service possible. Our team is committed to ensuring your
          satisfaction and making your experience enjoyable.
        </p>
        <p className="hero__text">
          If you have any questions or feedback, please feel free to reach out
          to us. We value your input and look forward to hearing from you!
        </p>
        <div className="hero__cta">
          <a href="/contact" className="btn btn--primary">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
